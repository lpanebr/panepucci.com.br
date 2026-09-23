# Sinapses

Site pessoal de Luciano Panepucci, construído com Astro e publicado no GitHub Pages.

## Executar localmente

Na primeira execução, instale as dependências:

```sh
npm install
```

Para abrir o site em modo de desenvolvimento, com atualização automática ao editar
os arquivos:

```sh
npm run dev
```

O endereço local será exibido no terminal, normalmente `http://localhost:4321`.

Para conferir exatamente a versão estática que será publicada:

```sh
npm run build
npm run preview
```

## Publicar uma sinapse

Crie um arquivo Markdown em `src/content/sinapses/`:

```md
---
title: Título da sinapse
description: Resumo curto exibido na página inicial.
date: 2026-07-11
draft: false
---

Texto da sinapse.
```

O nome do arquivo define o endereço da sinapse. Use `draft: true` para manter um
texto no repositório sem exibi-lo no site. O campo é opcional e assume `false`.

Depois faça commit e push para `main`. O GitHub Pages será atualizado automaticamente.

## Recursos de conteúdo

As sinapses aceitam Markdown comum, incluindo títulos, listas, links, ênfase,
citações, código inline e blocos de código com destaque de sintaxe:

````md
```lua
print("Olá")
```
````

Também é possível usar HTML diretamente. Para imagens e GIFs centralizados e
responsivos, coloque o arquivo em `public/` e use a classe `prose-media`:

```html
<img
  src="/sinapses/minha-sinapse/exemplo.gif"
  alt="Descrição da imagem"
  class="prose-media"
  loading="lazy"
>
```

O site gera automaticamente uma página para cada sinapse, a listagem na página
inicial e o feed RSS em `/rss.xml`.

### Callouts

A sintaxe de callouts é compatível com a usada pelo Obsidian:

```md
> [!question] Como funciona?
> O conteúdo do callout fica nas linhas seguintes.
```

Os tipos e aliases estilizados são:

- `note`, `todo`
- `abstract`, `summary`, `tldr`
- `info`
- `tip`, `hint`, `important`
- `success`, `check`, `done`
- `question`, `help`, `faq`
- `warning`, `caution`, `attention`
- `failure`, `fail`, `missing`
- `danger`, `error`
- `bug`
- `example`
- `quote`, `cite`

Tipos diferentes desses também são aceitos, mas recebem o estilo genérico de
informação. Se o título for omitido, o nome do tipo será usado:

```md
> [!tip]
> Uma dica sem título personalizado.
```
