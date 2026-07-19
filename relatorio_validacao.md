# Relatório de Validação — Gestor Financeiro Pessoal v1.0.0

Data: 19/07/2026 · Ambiente: Chromium (painel de preview do Claude Code), viewports 375×812 e 1366×850.

## Decisões técnicas (ambiguidades não bloqueantes, resolvidas e documentadas)

| Decisão | Justificativa |
|---|---|
| Arquivo de referência = `..\Simulador_Patrimonio_Renda_Passiva.html` | Placeholder da seção 0 não preenchido; é o simulador existente na pasta de trabalho. Reaproveitados: identidade visual (DM Serif/DM Sans, paleta cream/charcoal/gold), formatação pt-BR, gráficos SVG sem bibliotecas, padrão de inputs e snapshot. Arquivo original não foi alterado. |
| Sem Excel de dados iniciais | Placeholder não preenchido; dados de demonstração são genéricos (sem dados pessoais reais, conforme item 13). |
| Diretório de saída = `gestor_financeiro\` | Placeholder não preenchido; subpasta evita poluir a pasta de trabalho. |
| Persistência em `localStorage` (não IndexedDB) | Volume estimado (milhares de lançamentos ≈ poucos MB de JSON) cabe com folga; camada `Store` isola a troca futura. Schema versionado com hook de migração. |
| XLSX nativo (gerador ZIP próprio + `DecompressionStream` na leitura) | Elimina dependência de CDN/bundle de ~1 MB (SheetJS) e garante funcionamento 100% offline. Limitação documentada: importação exige Safari 16.4+/Chrome 80+. |
| Dinheiro em centavos inteiros | Evita erros de ponto flutuante; conversão só na borda (UI/Excel). Simulador usa float em reais (projeção, não contabilidade). |
| Convenções do simulador | Aportes no fim do mês; PGBL contribuição em dezembro; benefício fiscal reinvestido em maio do ano seguinte; comparação "sem PGBL" usa o mesmo desembolso como aporte comum. Tudo exibido na interface. |

## Testes executados

### Suíte interna (`?diag=1`) — 21/21 aprovados
Parser pt-BR/internacional, formatação, equivalência composta de taxas (a.m.↔a.a.), aritmética de competências, resumo mensal (resultado, taxa de poupança, receita zero), saldo encadeado de investimentos (com e sem saldo informado), simulador (taxa zero, taxa negativa, meta já atingida, retirada zero, inflação > rentabilidade), busca de aporte necessário, CRC32, serial de data Excel e roundtrip XLSX exportar→importar.

### Fluxos verificados no navegador (sem erros de console em nenhum passo)
1. Primeira execução: tela de boas-vindas com opção base vazia / demonstração. ✔
2. Demonstração carregada: 10 lançamentos, 3 investimentos, 3 metas, 3 cenários. ✔
3. Resumo: 8 KPIs conferidos contra soma manual das linhas (receitas, despesas, resultado batem exatamente); alertas de estouro exibidos. ✔
4. CRUD: inclusão, edição de valor mensal, duplicação e exclusão de despesa refletidos nos totais imediatamente. ✔
5. Desfazer restaurou o estado anterior. ✔
6. Todas as 7 abas renderizam com conteúdo; Relatórios com 7 gráficos SVG. ✔
7. Simulador (cenário demo): patrimônio necessário R$ 13,2 mi (40 mil/mês ÷ 4% + margem 10%), patrimônio final R$ 7,93 mi = 31% da meta corrigida, mensagem de meta não atingida com aporte adicional e prazo extra. Valores coerentes com recomputação externa. ✔
8. Persistência: dados intactos após recarregar a página; boas-vindas não reabre. ✔
9. Roundtrip XLSX em memória com dados reais da base: cabeçalhos e valores preservados. ✔
10. Snapshot: HTML de 177 KB gerado e executado em iframe isolado — modo somente leitura ativo, banner com "Criar cópia editável", 8 KPIs com dados embutidos, gráficos e navegação (Relatórios com 7 SVGs) e simulador operantes; tentativa de edição bloqueada com aviso. ✔
11. Mobile 375×812: zero scroll horizontal (Resumo e Lançamentos), navegação inferior visível com alvos de 56 px, cartões no lugar da grade de 12 colunas. ✔
12. Desktop 1366×850: abas superiores, grade anual com 96 células editáveis, linha de totais e média. ✔
13. Modo diagnóstico não polui a experiência normal (só com `?diag=1`). ✔

## Limitações conhecidas

- Teste em Safari/iPhone físico não foi possível neste ambiente — o layout foi validado em viewport equivalente (375/390/430 px compartilham o mesmo breakpoint ≤640 px) e com `env(safe-area-inset-*)` aplicado; recomenda-se um teste rápido no aparelho.
- Importação .xlsx depende de `DecompressionStream` (Safari 16.4+, Chrome/Edge 80+); a interface avisa quando indisponível.
- `localStorage` em `file://` no Safari é isolado por arquivo — documentado no README.
- Desempenho: a grade anual re-renderiza a aba a cada edição; fluido com centenas de linhas ativas por natureza (o histórico de anos anteriores não pesa na renderização, apenas o conjunto filtrado do ano exibido).
- Exportação de gráfico em PNG depende de canvas + serialização SVG (funciona nos navegadores-alvo; botão informa em caso de falha).
