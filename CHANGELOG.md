# Changelog — Gestor Financeiro Pessoal

## 1.0.0 — 19/07/2026

Versão inicial. Schema de dados v1.

- **Resumo**: KPIs do mês (receitas, despesas, resultado, taxa de poupança, aportes líquidos, sobra de caixa, patrimônio financeiro e total), comparação com o mês anterior, alertas de estouro de orçamento/resultado negativo, gráfico de 12 meses e atalhos de inclusão.
- **Lançamentos**: receitas e despesas com previsto × realizado por mês; grade anual editável no desktop e cartões com editor por mês no mobile; adicionar, editar, duplicar, arquivar, excluir; copiar mês anterior, repetir até dezembro, aplicar em intervalo; filtros, ordenação, busca, desfazer (10 níveis) e fechamento mensal com reabertura confirmada.
- **Orçamento e metas**: previsto × realizado por categoria com semáforo configurável, maiores desvios, replicação de orçamento para meses futuros; metas de despesa máxima, receita mínima, economia mínima, aporte mínimo, patrimônio-alvo e renda passiva, mensais/anuais/data-alvo.
- **Investimentos**: ativos financeiros e bens separados; lançamento mensal de aporte, resgate, rendimento e saldo; saldo encadeado automático; rentabilidade mensal; alocação por classe com alvo opcional.
- **Aposentadoria**: simulador mês a mês com valores nominais e reais, aportes com crescimento anual, aporte extraordinário anual, conversão parcial de bens, taxa de retirada, margem de segurança, cenário PGBL (contribuição, benefício fiscal, reinvestimento, taxa de administração e tributação no resgate) e comparação com/sem PGBL; cenários salvos (conservador/base/otimista) com comparação; aporte adicional necessário e prazo extra quando a meta não é atingida; resumo executivo.
- **Relatórios**: 7 gráficos SVG (evolução mensal, categorias no tempo, composição, previsto × realizado, patrimônio, aportes × rendimentos, metas), filtros por período/categoria, visão YTD, ranking de despesas, ver dados em tabela, exportar PNG, impressão/PDF.
- **Dados**: importação/exportação Excel (.xlsx) com prévia e relatório de erros, modelo para download, backup/restauração JSON versionado, snapshot HTML funcional com modo somente leitura e cópia editável, dados de demonstração, limpeza com dupla confirmação, tema claro/escuro, cadastros de categorias/contas/pessoas e limites do semáforo.
- **Qualidade**: valores em centavos inteiros, fórmulas centralizadas em funções puras, 21 testes internos (`?diag=1`), sem dependências externas (gerador/leitor .xlsx próprio).

## 1.1.0 — 19/07/2026

- **Sincronização em nuvem (opcional)**: módulo `CloudSync` integrado via Supabase — login por e-mail (magic link), tabela `app_state` com Row Level Security (cada usuário só acessa os próprios dados), push automático após cada alteração (debounced) e pull ao entrar/reconectar. Resolução de conflito não-destrutiva: quando nuvem e aparelho mudaram desde o último sync, o app avisa e deixa o usuário escolher qual versão manter — nunca sobrescreve sozinho.
- Desligado por padrão (`config.js` com `enabled:false`); sem configuração, o comportamento é idêntico à v1.0.0.
- Novos arquivos: `config.js` (única configuração que o usuário edita), `supabase_schema.sql` (script do banco) e `GUIA_PUBLICACAO.md` (passo a passo para publicar no GitHub Pages e ativar a nuvem).
