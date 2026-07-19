# Gestor Financeiro Pessoal

Aplicação local de gestão financeira pessoal em **um único arquivo HTML**, sem servidor, login ou envio de dados. Feita para uso recorrente no iPhone (Safari) e no desktop.

## Como abrir

- **iPhone:** envie `gestor_financeiro_pessoal.html` para o aparelho (AirDrop, Arquivos, e-mail) e abra no Safari. Para acesso rápido: compartilhar → *Adicionar à Tela de Início*.
- **Desktop:** dê duplo clique no arquivo (abre no navegador padrão) ou arraste-o para o Chrome/Edge.
- Nenhuma instalação, internet ou conta é necessária (a fonte decorativa usa Google Fonts quando há internet; sem internet a aplicação funciona igual com fontes do sistema).

## Onde os dados ficam salvos

- Tudo é salvo automaticamente no **armazenamento local do navegador** (`localStorage`), somente no seu dispositivo, com indicador "✓ salvo" no topo.
- Por padrão, nada é enviado para a internet. Não há telemetria nem cookies de terceiros.
- **Importante:** se o navegador limpar os dados do site (ou você usar aba anônima), o histórico se perde — gere backups periódicos.

## Sincronização em nuvem (opcional)

- O app pode sincronizar com um banco de dados próprio (Supabase), para consultar os mesmos dados de qualquer aparelho, com login por e-mail.
- É **desligado por padrão** — veja o arquivo `config.js`. Para ativar, siga o passo a passo em [GUIA_PUBLICACAO.md](GUIA_PUBLICACAO.md) (publicar no GitHub Pages + criar o banco no Supabase).
- Mesmo com a nuvem ativada, o app continua funcionando offline e salvando primeiro no aparelho; a sincronização acontece em segundo plano.

## Backup e restauração

- **Dados e configurações → Backup JSON**: baixa um arquivo com toda a base (versionado por schema).
- **Restaurar JSON…**: selecione um backup; a aplicação mostra uma prévia e pede confirmação antes de substituir os dados.

## Importar e exportar Excel

- **Baixar modelo Excel** gera `modelo_importacao_financeira.xlsx` com as abas `Instrucoes`, `Lancamentos`, `Investimentos`, `Metas`, `Categorias` e `Configuracoes` e exemplos de preenchimento.
- Formato normalizado: uma linha por item e competência (`AAAA-MM` como texto). Valores aceitam vírgula ou ponto decimal.
- **Importar Excel…** valida o arquivo, mostra prévia com contagens (novos/atualizados/ignorados/erros), deixa escolher entre **mesclar**, **atualizar por ID** ou **substituir**, e gera relatório de erros (CSV) com aba, linha, coluna e correção sugerida.
- **Exportar Excel completo** ou **do ano corrente** a qualquer momento.
- Observação técnica: a leitura de .xlsx usa `DecompressionStream` (Safari 16.4+, Chrome/Edge 80+). A exportação funciona em qualquer navegador moderno.

## Snapshot HTML funcional

- **Dados e configurações → Exportar snapshot HTML** baixa um novo `.html` com os dados do momento embutidos, data/hora de geração e versão.
- O snapshot abre sozinho em qualquer lugar, com **abas, filtros, gráficos e simulador funcionando**, em modo somente leitura.
- O botão **"Criar cópia editável neste dispositivo"** importa os dados do snapshot para o armazenamento local, mediante confirmação.

## Atualização da aplicação

- Nova versão = substituir o arquivo HTML. Os dados ficam no navegador (não no arquivo), com versionamento de schema e migração automática ao abrir.

## Testes / diagnóstico

- Abra a aplicação com `?diag=1` na URL para executar a suíte de testes embutida (fórmulas financeiras, conversão de taxas, parser de valores, simulador e roundtrip Excel). O resultado aparece na aba Dados.

## Limitações conhecidas

- Persistência via `localStorage` (limite típico de 5 MB — suficiente para muitos anos de lançamentos; o backup JSON cobre migração de dispositivo).
- No Safari, arquivos abertos direto do `file://` têm armazenamento isolado por arquivo — mantenha o app sempre no mesmo local/arquivo.
- O simulador é determinístico (taxas constantes) e o cenário PGBL é uma aproximação educativa — não é consultoria financeira nem cálculo tributário definitivo.
- Importação .xlsx requer navegador com `DecompressionStream` (ver acima).
