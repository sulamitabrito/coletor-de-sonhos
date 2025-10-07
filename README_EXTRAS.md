# Arquivos extras para GitHub Pages

Este pacote complementa seu `index.html` já publicado no GitHub Pages.

## O que contém
- `.nojekyll` — desabilita o Jekyll do GitHub Pages (garante que pastas/arquivos com underscore funcionem como estáticos).
- `favicon.svg` — ícone de aba (lua crescente onírica).
- `robots.txt` — permite indexação e aponta para o `sitemap.xml`.
- `sitemap.xml` — **edite a URL base** antes de publicar.
- `404.html` — página de não encontrado com link para a home.
- `assets/main.js` — JavaScript (jQuery) com rolagem suave e alternância de tema.
- `CNAME.example` — modelo; renomeie para `CNAME` se for usar domínio próprio.
- `assets/README.md` — instruções rápidas para linkar `main.js` e o favicon.

## Como usar (passo a passo)
1. Faça download deste ZIP e extraia.
2. No GitHub, abra seu repositório → **Add file → Upload files**.
3. Arraste **todos** estes arquivos para a raiz do repositório (a pasta `assets` deve ir junto).
4. **Edite** o `sitemap.xml` e substitua `https://SEU_USUARIO.github.io/coletor-de-sonhos/` pela URL real do seu site.
5. (Opcional) Renomeie `CNAME.example` para `CNAME` e coloque seu domínio (ex.: `sonhosdasminas.com.br`). Depois, aponte um registro **CNAME** do seu domínio para `SEU_USUARIO.github.io` no provedor de DNS.
6. No seu `index.html`, adicione dentro de `<head>`:

   ```html
   <link rel="icon" href="/favicon.svg" type="image/svg+xml">
   ```

   e, antes de `</body>`, adicione:

   ```html
   <script src="/assets/main.js"></script>
   ```

   (Se você já tem o script inline fazendo isso, pode manter como está e **não** incluir o `main.js`.)
7. Vá em **Settings → Pages** e confirme que o deploy está ativo em `main`. Aguarde 1–2 minutos e teste a URL.

**Dica**: sempre que mudar algo, o GitHub Pages re-publica automaticamente.

Última atualização: 2025-10-07
