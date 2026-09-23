---
title: Escrevendo sobre ordem para tentar não esquecer
description: Registrando como usar o `sort/pattern/` para lembrar amanhã.
date: 2026-09-23
---

Não é sobre uma ordem semanticamente filosófica, embora essa esteja em baixa atualmente.

Este registro é para tentar gravar de forma mais permanente uma operação do Neovim que eu costumo querer usar com frequência, mas acabo desistindo quando não me lembro, porque não é algo mortalmente importante.

> [!question] Como ordenar linhas descartando uma parte inicial?
> O uso mais recente foi bem inútil e mundano.
> Eu só queria classificar as definições dos meus atalhos segundo o diretório de destino.

```lua
	hl.bind("D", focus_and_reset("/home/lpanebr/Dropbox/github/lpanebr/dotfiles/"))
	hl.bind("G", focus_and_reset("/home/lpanebr/Dropbox/github/"))
	hl.bind("I", focus_and_reset("/home/lpanebr/Insync/luciano@editoracubo.com.br/"))
	hl.bind("J", focus_and_reset("/home/lpanebr/Dropbox/brain-vaults/journaling/"))
	hl.bind("Q", focus_and_reset("/home/lpanebr/Dropbox/github/lpanebr/qmk_userspace"))
	hl.bind("B", focus_and_reset("/home/lpanebr/Dropbox/github/lpanebr/panepucci.com.br/"))
	hl.bind("U", focus_and_reset("/home/lpanebr/Dropbox/github/editoracubo/submit.git/"))
	hl.bind("L", focus_and_reset("/home/lpanebr/Dropbox/github/lpanebr/"))
	hl.bind("E", focus_and_reset("/home/lpanebr/Dropbox/github/editoracubo/"))
	hl.bind("P", focus_and_reset("/home/lpanebr/Dropbox/github/editoracubo/periodikos.git/"))
```

Consultei o help. Claro que eu já tinha feito isso no passado, muito tempo atrás, mas, assim como tudo o que não é usado com uma assiduidade mínima, essa memória de curta duração sempre evaporava.

Na era mais recente, pedir para uma ferramenta de IA qualquer me dar o comando e copiar sem usar minhas partes orgânicas para processamento de dados não ajudou, muito pelo contrário, obviamente.

Bem, hoje eu decidi fazer algo à respeito. Talvez tenha sido só uma boa desculpa para procrastinar o trabalho, mas meu cérebro não estava conseguindo se alinhar.

Enfim, me lembrei que criei este blog/website/sei-lá e resolvi tentar consolidar esse aprendizado de uma vez por todas! (assim espero...)

> [!info] Para classificar linhas no Neovim descartando uma parte inicial 
> eu preciso me lembrar que basta passar o parâmetro `/pattern/` ao comando `sort`.

Por exemplo, para classificar as linhas dos meus atalhos, acima:

`sort/^.*focus/`

```lua
	hl.bind("J", focus_and_reset("/home/lpanebr/Dropbox/brain-vaults/journaling/"))
	hl.bind("G", focus_and_reset("/home/lpanebr/Dropbox/github/"))
	hl.bind("E", focus_and_reset("/home/lpanebr/Dropbox/github/editoracubo/"))
	hl.bind("P", focus_and_reset("/home/lpanebr/Dropbox/github/editoracubo/periodikos.git/"))
	hl.bind("U", focus_and_reset("/home/lpanebr/Dropbox/github/editoracubo/submit.git/"))
	hl.bind("L", focus_and_reset("/home/lpanebr/Dropbox/github/lpanebr/"))
	hl.bind("D", focus_and_reset("/home/lpanebr/Dropbox/github/lpanebr/dotfiles/"))
	hl.bind("B", focus_and_reset("/home/lpanebr/Dropbox/github/lpanebr/panepucci.com.br/"))
	hl.bind("Q", focus_and_reset("/home/lpanebr/Dropbox/github/lpanebr/qmk_userspace"))
	hl.bind("I", focus_and_reset("/home/lpanebr/Insync/luciano@editoracubo.com.br/"))
```

Será que vai funcionar? Eu me lembrar, eu quero dizer. O comando claramente funciona.

Se não funcionar, pelo menos melhorou o meu humor! 😊

