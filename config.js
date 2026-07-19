/*
  CONFIGURAÇÃO DA SINCRONIZAÇÃO EM NUVEM (opcional)
  ---------------------------------------------------
  Este arquivo controla se o Gestor Financeiro Pessoal sincroniza
  os dados com um banco na nuvem (Supabase), para você consultar
  de qualquer aparelho.

  Sem preencher nada aqui, o app funciona normalmente e guarda os
  dados só neste navegador — como sempre funcionou.

  Para ativar a nuvem, siga o guia "GUIA_PUBLICACAO.md" até o passo
  "Configurar o config.js" e troque os três valores abaixo pelos que
  o Supabase te der. Depois de editar, salve o arquivo (no GitHub,
  clique em "Commit changes").
*/
window.GFP_SUPABASE_CONFIG = {
  enabled: false,   // troque para true depois de preencher url e anonKey
  url: '',          // ex.: 'https://abcdefghij.supabase.co'
  anonKey: ''       // a chave "anon public" do seu projeto Supabase
};
