# fernandocamilotti.com

Portfólio de Fernando Camilotti Monteiro, engenheiro de software e designer.
Site de página única em **pt-BR**, **inglês** e **espanhol**, feito com Next.js 14 (App Router), TypeScript e Tailwind CSS. Publicado na Vercel.

## Rodando localmente

```bash
npm install
npm run dev          # http://localhost:3000 (redireciona para o idioma do navegador)
npm run build        # build de produção
npm start            # serve o build
```

Variáveis de ambiente (opcionais, veja `.env.example`):

| Variável | Para que serve |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL base usada em canonical, hreflang, sitemap e Open Graph. Troque para `https://…` quando o domínio tiver certificado. |
| `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID` | Liga o Google Analytics. Sem ele, o GA não carrega. |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | Código de verificação do Search Console. |

O Vercel Analytics só é carregado quando o site roda na Vercel.

## Onde editar o conteúdo

| O quê | Onde |
| --- | --- |
| Textos (pt-BR, en, es) | `lib/i18n/dictionaries/*.ts` (o tipo está em `lib/i18n/types.ts`) |
| Projetos (stack, datas, links) | `config/projects.ts` (textos em `dictionaries`, pelo `id`) |
| Experiência | `config/experience.ts` (textos em `dictionaries`, pelo `id`) |
| Formação | `config/education.ts` |
| Publicações (do Lattes) | `config/publications.ts` |
| Habilidades | `config/skills.ts` |
| Contato e redes | `config/socials.ts` |
| URL do site | `config/site.ts` |

Para adicionar um projeto: crie a entrada em `config/projects.ts` e o texto correspondente (`projects[id]`) nos **três** dicionários. O TypeScript avisa se faltar algum idioma.

## Idiomas e SEO

- Rotas `/pt-BR`, `/en` e `/es`. Quem acessa `/` é redirecionado pelo cookie `NEXT_LOCALE` e depois pelo `Accept-Language`; o padrão é `pt-BR` (`lib/i18n/config.ts`).
- Cada página tem canonical, hreflang (`pt-BR`, `en`, `es`, `x-default`), Open Graph, Twitter cards e JSON-LD `Person`.
- `sitemap.xml` e `robots.txt` são gerados (`app/sitemap.ts`, `app/robots.ts`).
- A imagem de compartilhamento (OG/Twitter) é um JPEG estático por idioma em `public/og/` (1200×630, menos de 300 KB para o WhatsApp não descartar), com texto alternativo localizado. Para regenerar depois de mudar o texto ou o hero:

  ```bash
  pip install pillow fonttools brotli numpy
  python scripts/og/generate.py      # lê scripts/og/copy.json e public/hero/hole-poster-1600.webp
  ```
- Dados estruturados (JSON-LD) em um único grafo: `WebSite`, `ProfilePage` (por idioma) e `Person`.

## Ilustrações

As ilustrações SVG ficam em `scripts/illustrations/` e são pré-renderizadas em `components/illustrations/generated.ts`, para o React não precisar hidratá-las. Depois de editar uma ilustração:

```bash
npm run build:illustrations
```

## Fontes

Hospedadas localmente em `assets/fonts` (Inter 400–600 e Space Grotesk SemiBold, só com os caracteres latinos usados), sem requisição ao Google Fonts. `Inter-Bold.ttf` e `Inter-Regular.ttf` servem apenas para gerar as imagens OG.

## Estrutura

```
app/[locale]/        layout, página única, imagens OG
app/                 sitemap, robots, manifest, ícones
components/site/     seções da página (hero, trabalhos, sobre…)
components/common/   seletor de idioma, analytics, tema
config/              dados que não dependem de idioma
lib/i18n/            idiomas, dicionários, middleware helpers
scripts/             gerador das ilustrações
middleware.ts        negociação de idioma
```
