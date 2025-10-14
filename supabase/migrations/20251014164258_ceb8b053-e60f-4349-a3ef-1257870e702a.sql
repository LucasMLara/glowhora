-- Criar tabela lista_espera
CREATE TABLE IF NOT EXISTS public.lista_espera (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Habilitar Row Level Security
ALTER TABLE public.lista_espera ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserções públicas (sem autenticação)
CREATE POLICY "Permitir inserções públicas"
ON public.lista_espera
FOR INSERT
TO public
WITH CHECK (true);

-- Política para permitir leitura apenas para usuários autenticados (admin)
CREATE POLICY "Permitir leitura para usuários autenticados"
ON public.lista_espera
FOR SELECT
TO authenticated
USING (true);

-- Criar índice para otimizar busca por e-mail
CREATE INDEX IF NOT EXISTS idx_lista_espera_email ON public.lista_espera(email);
CREATE INDEX IF NOT EXISTS idx_lista_espera_created_at ON public.lista_espera(created_at DESC);