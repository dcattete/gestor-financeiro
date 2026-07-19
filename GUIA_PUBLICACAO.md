# Guia passo a passo: colocar o Gestor Financeiro na nuvem (GitHub Pages + Supabase)

Este guia foi escrito para quem **nunca usou GitHub nem Supabase**. Cada passo diz exatamente onde clicar e o que você deve ver na tela em seguida. Reserve uns 30–40 minutos, sem pressa, e siga na ordem — não pule partes.

**O que você vai precisar:**
- Um computador (mais fácil que o celular para esta configuração inicial).
- Acesso ao seu e-mail.
- Os arquivos da pasta `gestor_financeiro` que você recebeu (o arquivo `.html`, o `config.js` e o `supabase_schema.sql`).

**O que você vai ganhar ao final:** um endereço de internet (algo como `https://seu-usuario.github.io/gestor-financeiro/`) que abre o app de qualquer celular ou computador, com os dados guardados num banco de dados na nuvem que só você (e quem você autorizar) consegue acessar.

Você vai criar **duas contas gratuitas**, nesta ordem: primeiro o **GitHub** (onde o site vai morar), depois o **Supabase** (onde o banco de dados vai morar). As telas dos sites podem mudar um pouco de aparência com o tempo — se algum botão não estiver exatamente com o nome descrito aqui, procure por algo com sentido parecido nas proximidades.

---

## PARTE 1 — Publicar o site no GitHub Pages

### Passo 1.1 — Criar sua conta no GitHub

1. Abra o navegador e acesse **github.com**.
2. No canto superior direito da tela, clique no botão **Sign up**.
3. Vai aparecer um formulário. Preencha nesta ordem:
   - **Seu e-mail** → digite e clique em **Continue**.
   - **Crie uma senha** → escolha uma senha forte (o site avisa se ela é fraca) e clique em **Continue**.
   - **Escolha um nome de usuário** → é o nome que vai aparecer no endereço do seu site depois (ex.: `danielsanguedo`). Use só letras, números e hífen, sem espaços. O GitHub avisa na hora se o nome já está em uso — se estiver, tente outra variação. Clique em **Continue**.
   - Pode aparecer uma pergunta sobre receber e-mails de novidades — responda `y` (sim) ou `n` (não), tanto faz, e clique em **Continue**.
4. Vai aparecer um **teste de verificação** (geralmente resolver um quebra-cabeça visual simples, tipo encaixar uma peça). Resolva e continue.
5. O GitHub manda um **código de verificação para o seu e-mail**. Abra seu e-mail em outra aba, copie o código de 6 dígitos e cole na tela do GitHub.
6. Pronto — você está logado. Você deve estar vendo a página inicial do GitHub com seu nome de usuário no canto superior direito.

✅ **Checkpoint:** se você conseguir ver seu nome de usuário (ou um círculo com sua inicial) no canto superior direito da tela, a conta foi criada com sucesso.

### Passo 1.2 — Criar o repositório (a "pasta" onde o site vai ficar)

1. No canto superior direito, clique no ícone **+** (ao lado do seu avatar) e depois em **New repository** no menu que abrir.
   - Se não encontrar o **+**, acesse diretamente: **github.com/new**
2. Você vai ver um formulário "Create a new repository". Preencha:
   - **Repository name**: digite `gestor-financeiro` (tudo minúsculo, com hífen, sem espaços e sem acentos).
   - **Description**: pode deixar em branco.
   - Logo abaixo, marque a opção **Public** (deve já vir marcada por padrão — confirme que não está em "Private").
   - Na seção "Initialize this repository with:", **não marque nenhuma caixa** (nem "Add a README file", nem ".gitignore", nem "license"). Deixe tudo desmarcado.
3. Role até o final da página e clique no botão verde **Create repository**.
4. Você será levado para a página do repositório, que vai mostrar instruções técnicas de linha de comando (Git) — **ignore essa parte**, vamos usar só o site mesmo.

✅ **Checkpoint:** o endereço no topo do navegador deve estar assim: `github.com/SEU-USUARIO/gestor-financeiro`.

### Passo 1.3 — Enviar os arquivos do app para o GitHub

1. Ainda na página do repositório, procure o link **uploading an existing file** (ele aparece no meio da página, dentro do texto "...or **uploading an existing file**"). Clique nele.
   - Alternativa se não achar esse link: clique no botão **Add file** (no canto superior direito da lista de arquivos) → **Upload files**.
2. Vai aparecer uma área cinza escrito "Drag files here to add them to your repository". No seu computador, abra a pasta `gestor_financeiro` (a que você recebeu) numa janela do Explorador de Arquivos, **selecione todos os arquivos dentro dela** (Ctrl+A) e **arraste para dentro dessa área cinza** do navegador.
   - Os arquivos que precisam ir: `gestor_financeiro_pessoal.html`, `config.js`, `supabase_schema.sql`, `README.md`, `CHANGELOG.md`, `relatorio_validacao.md`, `GUIA_PUBLICACAO.md` e `modelo_importacao_financeira.xlsx`. Pode subir a pasta inteira sem problema — só os dois primeiros (`gestor_financeiro_pessoal.html` e `config.js`) são realmente necessários para o site funcionar; os demais são documentação.
3. Espere a barra de upload de cada arquivo terminar (fica verde/completa).
4. **Passo importante — renomear o arquivo principal:** na lista de arquivos que apareceu na tela de upload, localize `gestor_financeiro_pessoal.html`. Clique em cima do **nome** desse arquivo (ele fica editável) e troque o nome para exatamente:
   ```
   index.html
   ```
   Isso faz o site abrir direto no endereço curto, sem precisar digitar o nome do arquivo depois.
5. Role até o final da página. Na caixa "Commit changes", pode deixar a mensagem padrão como está (algo como "Add files via upload"). Clique no botão verde **Commit changes**.
6. Você volta para a lista de arquivos do repositório — confirme que `index.html` e `config.js` aparecem na lista.

✅ **Checkpoint:** a lista de arquivos do repositório mostra `index.html` (não mais `gestor_financeiro_pessoal.html`) e `config.js`.

### Passo 1.4 — Ativar o GitHub Pages (publicar o site)

1. No topo da página do repositório, clique na aba **Settings** (ícone de engrenagem, geralmente a última aba à direita).
2. No menu da esquerda, role um pouco até achar **Pages** e clique.
3. Na seção **Build and deployment**:
   - Em **Source**, confirme que está selecionado **Deploy from a branch**.
   - Logo abaixo, em **Branch**, tem dois menus: no primeiro selecione `main`, no segundo (a pasta) selecione `/ (root)`.
   - Clique no botão **Save**.
4. Aguarde de 1 a 3 minutos. Atualize a página (F5). Deve aparecer uma faixa **verde** no topo dizendo algo como:
   > **Your site is live at `https://seu-usuario.github.io/gestor-financeiro/`**
5. Clique nesse link (ou copie e cole numa nova aba). O app deve abrir normalmente — você verá a tela "Bem-vindo ao Gestor Financeiro" pedindo para começar vazio ou carregar demonstração. **Isso confirma que o site está no ar.** Por enquanto os dados ainda ficam só nesse navegador (a nuvem só liga na Parte 3).
6. **Copie e guarde esse endereço** (`https://seu-usuario.github.io/gestor-financeiro/`) — você vai colar ele duas vezes no Supabase daqui a pouco. Uma boa ideia é colar num bloco de notas ou no campo de anotações do celular.

✅ **Checkpoint:** você consegue abrir o app pelo endereço `https://seu-usuario.github.io/gestor-financeiro/` num navegador (teste inclusive fechando e abrindo de novo).

⚠️ **Se a faixa verde não aparecer:** espere mais um pouco e atualize de novo — a primeira publicação às vezes demora até 5 minutos. Se depois de 10 minutos nada mudar, volte em Settings → Pages e confirme que Branch está mesmo em `main` / `root` e clique em Save novamente.

> 💡 **Para atualizações futuras:** sempre que eu te mandar uma versão nova do app, repita só o Passo 1.3 (subir o arquivo por cima, lembrando de renomear para `index.html` de novo) — o resto continua igual.

---

## PARTE 2 — Criar o banco de dados no Supabase

### Passo 2.1 — Criar sua conta e o projeto no Supabase

1. Acesse **supabase.com**.
2. Clique em **Start your project** (ou **Sign up**, no canto superior direito).
3. A forma mais rápida é clicar em **Continue with GitHub** e autorizar — assim você usa a mesma conta que acabou de criar. Se preferir, pode criar com e-mail e senha próprios.
4. Depois de logar, você chega numa tela de organização. Se for a primeira vez, o Supabase já cria uma organização automática com seu nome — pode usar essa mesma, só clique em **New project** (ou "Create a new project").
5. Preencha o formulário do novo projeto:
   - **Project name**: digite `gestor-financeiro`.
   - **Database Password**: clique em **Generate a password** (ou crie a sua) — **copie essa senha e guarde num lugar seguro** (bloco de notas, gerenciador de senhas). Você não vai usá-la no dia a dia do app, mas é a senha "mestra" do banco.
   - **Region**: escolha `South America (São Paulo)` na lista — deixa o app mais rápido para vocês no Brasil.
   - Pode deixar o restante como padrão.
6. Clique em **Create new project**.
7. Aparece uma tela de carregamento ("Setting up your project..."). Aguarde de 1 a 2 minutos até o painel do projeto abrir completamente.

✅ **Checkpoint:** você está vendo o painel do projeto, com um menu de ícones na lateral esquerda (Table Editor, SQL Editor, Authentication, etc.).

### Passo 2.2 — Criar a tabela do banco de dados

1. No menu da esquerda, clique no ícone **SQL Editor** (parece um terminal/prompt).
2. Clique no botão **New query** (geralmente no canto superior).
3. Vai abrir uma caixa de texto grande, vazia. Agora você precisa copiar o conteúdo do arquivo `supabase_schema.sql`:
   - No seu computador, abra a pasta `gestor_financeiro` e localize o arquivo `supabase_schema.sql`.
   - Clique com o botão direito nele → **Abrir com** → **Bloco de Notas** (ou qualquer editor de texto simples).
   - Selecione todo o texto (Ctrl+A) e copie (Ctrl+C).
4. Volte para a aba do Supabase, clique dentro da caixa de texto do SQL Editor e cole (Ctrl+V) todo o conteúdo.
5. Clique no botão **Run** no canto inferior direito da caixa (ou aperte `Ctrl+Enter`).
6. Deve aparecer uma mensagem verde de sucesso, algo como **"Success. No rows returned"**. Isso significa que a tabela `app_state` foi criada, já com as regras de segurança (cada pessoa só vê os próprios dados).

✅ **Checkpoint:** a mensagem de sucesso apareceu, sem texto vermelho de erro. Para confirmar, clique no ícone **Table Editor** no menu da esquerda — deve aparecer uma tabela chamada `app_state` na lista.

⚠️ **Se aparecer erro em vermelho:** confira se você copiou o arquivo `supabase_schema.sql` inteiro (do início ao fim, sem cortar nada) e tente rodar de novo. Se o erro disser algo como "relation already exists", pode ignorar — significa que a tabela já tinha sido criada numa tentativa anterior.

### Passo 2.3 — Copiar as chaves de acesso do projeto

1. No menu da esquerda, clique no ícone de **engrenagem** (Project Settings), geralmente perto do final da lista.
2. Dentro de Settings, clique em **API** (no submenu).
3. Você vai ver uma seção com:
   - **Project URL** — algo como `https://abcdefghijklmno.supabase.co`. Clique no ícone de copiar ao lado dele e cole num bloco de notas temporário.
   - Um pouco mais abaixo, **Project API keys**, com uma linha chamada **anon** / **public** — é uma sequência bem longa de letras e números (começa geralmente com `eyJ...`). Clique no ícone de copiar ao lado dela e cole no mesmo bloco de notas, embaixo da URL.
4. Guarde esse bloco de notas aberto — você vai usar essas duas informações no Passo 3.

⚠️ **Atenção:** existe também uma chave chamada **service_role** na mesma tela — **não copie essa**, ela é secreta e não deve ser usada no app (nem colocada em nenhum arquivo que você for publicar no GitHub). Use somente a chave **anon / public**.

✅ **Checkpoint:** você tem anotados dois valores: a Project URL (link começando com `https://` e terminando em `.supabase.co`) e a chave anon public (texto bem longo).

### Passo 2.4 — Autorizar o endereço do seu site a fazer login

1. No menu da esquerda do Supabase, clique em **Authentication**.
2. Dentro de Authentication, clique em **URL Configuration** (pode estar no submenu ou numa aba superior, dependendo da versão do painel).
3. No campo **Site URL**, apague o que estiver escrito e cole o endereço do seu site que você guardou no Passo 1.4 — exemplo: `https://seu-usuario.github.io/gestor-financeiro/` (com a barra `/` no final).
4. Logo abaixo, no campo **Redirect URLs**, clique em **Add URL** e cole **o mesmo endereço** de novo.
5. Clique em **Save** (geralmente no canto inferior direito da seção).

✅ **Checkpoint:** ao recarregar a página de URL Configuration, o endereço do seu site aparece salvo tanto em Site URL quanto na lista de Redirect URLs.

---

## PARTE 3 — Ligar o app ao banco de dados

Agora vamos editar o arquivo `config.js` **direto pelo site do GitHub** (sem precisar instalar nada no computador).

1. Volte para a aba do GitHub, na página do seu repositório (`github.com/SEU-USUARIO/gestor-financeiro`).
2. Na lista de arquivos, clique em `config.js` para abri-lo.
3. Clique no ícone de **lápis** (✏️ "Edit this file"), geralmente no canto superior direito da área do arquivo.
4. Vai abrir um editor de texto simples com o conteúdo do arquivo. **Apague todo o conteúdo** (Ctrl+A e depois Delete) e cole o texto abaixo, **substituindo** os valores de exemplo pelos que você copiou no Passo 2.3:

   ```js
   window.GFP_SUPABASE_CONFIG = {
     enabled: true,
     url: 'COLE_AQUI_A_SUA_PROJECT_URL',
     anonKey: 'COLE_AQUI_A_SUA_CHAVE_ANON_PUBLIC'
   };
   ```

   Fica parecido com isto (com os seus valores reais, claro):
   ```js
   window.GFP_SUPABASE_CONFIG = {
     enabled: true,
     url: 'https://abcdefghijklmno.supabase.co',
     anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.longo-texto-aqui...'
   };
   ```
   **Cuidados ao colar:**
   - Mantenha as aspas simples `'...'` em volta da URL e da chave.
   - Não deixe espaços em branco antes ou depois do texto colado.
   - `enabled: true` não deve ter aspas em volta de `true`.
   - Não apague o ponto e vírgula `;` no final nem as chaves `{ }`.
5. Role até o final da página. Na caixa "Commit changes", deixe como está e clique no botão verde **Commit changes**.

✅ **Checkpoint:** ao clicar em `config.js` de novo na lista de arquivos, o conteúdo mostrado deve refletir exatamente o que você colou, com `enabled: true` e os dois valores preenchidos.

6. Espere cerca de 1 minuto (o GitHub Pages leva um instante para atualizar) e abra o endereço do seu site de novo. Se ele já estava aberto numa aba, force a atualização: `Ctrl+Shift+R` no computador (ou, no celular, feche a aba/o app e abra de novo).
7. Dentro do app, vá até a aba **Dados** (ícone "⚙" na navegação de baixo, ou no menu "Mais" se estiver no celular) e role até a seção **06 · Nuvem**. Deve aparecer um campo para digitar e-mail e o botão **Enviar link de acesso**.

✅ **Checkpoint final da Parte 3:** a seção Nuvem não mostra mais "não configurada" — mostra o campo de e-mail. Se ainda disser "não configurada", revise o `config.js` (veja "Se algo der errado" no final deste guia).

---

## PARTE 4 — Primeiro login (você e a Juliana)

1. Na aba **Dados › Nuvem**, digite **o seu e-mail** no campo e clique em **Enviar link de acesso**.
2. Uma mensagem deve confirmar o envio. Abra sua caixa de e-mail (**confira também a pasta de spam/lixo eletrônico**) — vai chegar um e-mail do Supabase com um botão ou link de acesso.
3. Clique nesse link. Ele vai te levar de volta para o endereço do seu app, já logado. Na aba Dados › Nuvem, o status deve mudar para **"sincronizado"**, mostrando o seu e-mail.
4. Repita exatamente o mesmo processo (passos 1 a 3) no aparelho da Juliana, no mesmo endereço do site — usando o e-mail que vocês decidirem (veja o aviso importante abaixo).

> ⚠️ **Decisão importante — mesma base ou bases separadas?** Este banco guarda **uma cópia de dados por e-mail**. Se você e a Juliana quiserem enxergar e editar exatamente os mesmos lançamentos (uma "carteira" única do casal), façam login **com o mesmo e-mail nos dois aparelhos** (o link de acesso pode ser reenviado quantas vezes precisar, para o mesmo e-mail, de qualquer aparelho). Se cada um logar com o próprio e-mail, cada um terá sua base separada, sem ver os lançamentos do outro.

✅ **Checkpoint final:** abra o app em dois aparelhos diferentes (por exemplo, seu celular e seu computador), logados com o mesmo e-mail. Adicione um lançamento de teste em um deles, espere uns 5 segundos, e atualize o outro — o lançamento de teste deve aparecer lá também.

---

## Como funciona no dia a dia (depois de configurado)

- O app continua funcionando **mesmo sem internet** — ele sempre salva primeiro no aparelho.
- Com internet e login ativo, ele **envia automaticamente** as mudanças para a nuvem poucos segundos depois de cada edição — não precisa clicar em nada.
- Ao abrir o app num aparelho novo (ou depois de fazer login), ele **traz os dados da nuvem** automaticamente.
- Se, num caso raro, você editar em dois aparelhos ao mesmo tempo sem sincronizar entre um e outro, o app **nunca sobrescreve nada sozinho**: aparece um aviso em Dados › Nuvem perguntando se você quer usar a versão da nuvem ou manter a do aparelho.
- Há um botão **"↻ sincronizar agora"** na aba Dados › Nuvem para forçar a atualização manualmente, sempre que quiser ter certeza.
- Há também um botão **"sair"** ali, caso queira desconectar aquele aparelho da nuvem (os dados locais continuam no aparelho até você apagar).

---

## Se algo der errado

| Sintoma | O que fazer |
|---|---|
| "Sincronização em nuvem não configurada" | Revise o `config.js` no GitHub — `enabled` precisa ser `true` (sem aspas), e `url`/`anonKey` não podem estar vazios ou com aspas erradas. |
| Não chega o e-mail do link de acesso | Confira a pasta de spam/lixo eletrônico; confirme que digitou o e-mail certo; espere alguns minutos; tente clicar em "Enviar link de acesso" de novo. |
| Erro ao sincronizar / "Failed to fetch" | Confira se a `url` no `config.js` foi colada certinha (sem espaço antes/depois, com `https://` e terminando em `.supabase.co`); confirme que há internet no aparelho. |
| O link do e-mail dá erro ou página em branco | Confira se em Supabase → Authentication → URL Configuration o **Site URL** e o **Redirect URLs** estão exatamente iguais ao endereço do seu GitHub Pages (com a barra `/` no final). |
| Quero desligar a nuvem e voltar a usar só no aparelho | Edite `config.js` no GitHub e troque `enabled` para `false`. Os dados que já estavam salvos localmente continuam intactos. |
| Site do GitHub Pages não abre / dá 404 | Confira em Settings → Pages se ainda está publicado; confirme que o arquivo se chama exatamente `index.html` (minúsculo) na raiz do repositório. |

Seus dados financeiros continuam privados: a tabela do banco tem regras (Row Level Security) que garantem que **só você, autenticado com o seu e-mail**, acessa as suas próprias informações — nem o Supabase, nem o GitHub, nem qualquer pessoa que tenha o link do site conseguem ler seus lançamentos sem fazer login com um e-mail autorizado por você.
