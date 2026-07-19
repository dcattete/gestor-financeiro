-- Gestor Financeiro Pessoal — script de criação do banco no Supabase
-- Cole este script inteiro em: Supabase > SQL Editor > New query > Run

create table if not exists public.app_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.app_state enable row level security;

-- cada pessoa só enxerga e edita a própria linha (a sua e a da Juliana ficam
-- isoladas mesmo estando na mesma tabela e no mesmo projeto)
create policy "cada usuario le so os proprios dados"
  on public.app_state for select
  using (auth.uid() = user_id);

create policy "cada usuario grava so os proprios dados"
  on public.app_state for insert
  with check (auth.uid() = user_id);

create policy "cada usuario atualiza so os proprios dados"
  on public.app_state for update
  using (auth.uid() = user_id);
