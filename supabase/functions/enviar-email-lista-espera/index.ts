import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WaitlistRequest {
  email: string;
}

// Função auxiliar para enviar e-mails via Resend API
async function sendEmail(to: string | string[], subject: string, html: string) {
  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Glowhora <onboarding@resend.dev>",
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Erro ao enviar e-mail: ${error}`);
  }

  return await response.json();
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: WaitlistRequest = await req.json();

    console.log("Processando inscrição na lista de espera:", email);

    // Validar e-mail
    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "E-mail inválido" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Criar cliente Supabase
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Inserir no banco de dados
    const { data, error } = await supabase
      .from("lista_espera")
      .insert([{ email }])
      .select();

    if (error) {
      console.error("Erro ao inserir no banco:", error);
      
      // Verificar se é erro de duplicação
      if (error.code === "23505") {
        return new Response(
          JSON.stringify({ error: "Você já está na lista!" }),
          {
            status: 409,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        );
      }

      throw error;
    }

    console.log("E-mail inserido no banco com sucesso:", data);

    // Enviar e-mail de confirmação para o usuário
    const confirmationEmail = await sendEmail(
      email,
      "Você entrou na lista de espera do Glowhora 🚀",
      `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #4F46E5;">Olá!</h1>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Que bom ter você com a gente 😄
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Agora você está na lista de espera para o lançamento do <strong>Glowhora</strong>, 
            o sistema inteligente de agendamentos para profissionais autônomos.
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Assim que liberarmos o acesso antecipado, você será o primeiro a saber!
          </p>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="font-size: 14px; color: #6b7280;">
              — Equipe Glowhora
            </p>
          </div>
        </div>
      `
    );

    console.log("E-mail de confirmação enviado:", confirmationEmail);

    // Enviar notificação para o administrador
    const adminEmail = await sendEmail(
      "contato@glowhora.com",
      "Novo inscrito na lista de espera",
      `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #4F46E5;">Novo Lead</h2>
          <p style="font-size: 16px; color: #333;">
            Um novo usuário se inscreveu na lista de espera:
          </p>
          <p style="font-size: 18px; font-weight: bold; color: #4F46E5;">
            ${email}
          </p>
          <p style="font-size: 14px; color: #6b7280; margin-top: 20px;">
            Horário: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}
          </p>
        </div>
      `
    );

    console.log("E-mail de notificação enviado ao admin:", adminEmail);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Você entrou na lista de espera com sucesso!" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Erro na função enviar-email-lista-espera:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Erro ao processar solicitação" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
