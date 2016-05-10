---
layout:   post
title:    "Block e Inline addio - Nuove categorie di contenuti"
categories: general
---


Prima dell'introduzione delle specifiche HTML5, eravamo abituati a raggruppare gli elementi in due categorie: **block** e **inline**.

## Block e inline: le differenze

### Caratteristiche principali degli elementi block level

*   Se a questo tipo di elemento non attribuiamo una larghezza mediante la proprietà width, l'elemento block si estenderà per tutta la larghezza dell'elemento contenitore.
*   Gli elementi di blocco nel nostro flusso html si disporranno in una nuova riga anche se la loro larghezza è inferiore a quella dell'elemento contenitore.
*   Un elemento block  si estende in altezza per comprendere un eventuale elemento figlio.
*   Per questo tipo di elemento possiamo facilmente impostare altezza, larghezza, margini e padding.
*   Un elemento block può contenere altri elementi block o elementi inline.

See the Pen [Block elements](http://codepen.io/gnardella/pen/KwQNqr/) by Giuseppe ([@gnardella](http://codepen.io/gnardella)) on [CodePen](http://codepen.io).

### Caratteristiche principali degli elementi inline

*   Un elemento inline non interrompe il normale flusso della pagina causando la creazione di una nuova riga e si dispone in linea rispetto al testo contenuto in un elemento.
*   Due elementi inline seguenti si dispongono un di fianco all'altro.
*   Un elemento inline è dotato di larghezza e altezza tali da comprendere appena il suo contenuto.
*   Mediante i CSS non modifichiamo altezza e larghezza di un elemento inline, ma possiamo impostare di  il padding, i margini e il bordo.
*   Un elemento inline può contenere solo altri elementi inline.

See the Pen [Inline elements](http://codepen.io/gnardella/pen/raJjjM/) by Giuseppe ([@gnardella](http://codepen.io/gnardella)) on [CodePen](http://codepen.io). Come puoi notare, le caratteristiche che differenziano gli elementi block da quelli inline, si riferiscono ad aspetti relativi alla presentazione degli elementi stessi: infatti tramite i CSS possiamo impostare la proprietà _display_ degli elementi su **block** e **inline** ottenendo gli stessi risultati. Poiché gli standard Web stabiliscono la divisione tra contenuto e presentazione, la distinzione in block e inline è stata eliminata dalle specifiche HTML5, definendo [nuove categorie di contenuti](http://www.w3.org/TR/2014/REC-html5-20141028/dom.html#kinds-of-content).

## Nuove categorie degli elementi

Le specifiche HTML5 definiscono gli elementi in modo da avere un certo **significato semantico**, cioè essi descrivono il contenuto in base al loro **uso** e non come appaiono, quindi sono state identificate nuove categorie per gli elementi:

*   Metadata
*   Flow
*   Sectioning
*   Heading
*   Phrasing
*   Embedded
*   Interactive

###   Metadata contents (Contenuti di metadati)

Questi elementi si trovano nella sezione di **intestazione** della pagina web, e contengono i **metadati**, ovvero le informazioni sul documento stesso, impostazioni sulla presentazione (regole CSS) e sul comportamento (script), riferimenti a documenti esterni (fogli di stile CSS  e file Javascript esterni).

*   `base`
*   `link`
*   `meta`
*   `noscript`
*   `script`
*   `style`
*   `template`
*   `title`

###  Flow contents (Contenuti di flusso)

Rientrano in questa categoria gli elementi utilizzati nel **corpo** del documento e comprendono la quasi totalità dei tag HTML.

*   `a`
*   `abbr`
*   `address`
*   `area` (se è discendente di un elemento `map`)
*   `article`
*   `aside`
*   `audio`
*   `b`
*   `bdi`
*   `bdo`
*   `blockquote`
*   `br`
*   `button`
*   `canvas`
*   `cite`
*   `code`
*   `data`
*   `datalist`
*   `del`
*   `dfn`
*   `div`
*   `dl`
*   `em`
*   `embed`
*   `fieldset`
*   `figure`
*   `footer`
*   `form`
*   `h1`
*   `h2`
*   `h3`
*   `h4`
*   `h5`
*   `h6`
*   `header`
*   `hr`
*   `i`
*   `iframe`
*   `img`
*   `input`
*   `ins`
*   `kbd`
*   `keygen`
*   `label`
*   `main`
*   `map`
*   `mark`
*   `math`
*   `meter`
*   `nav`
*   `noscript`
*   `object`
*   `ol`
*   `output`
*   `p`
*   `pre`
*   `progress`
*   `q`
*   `ruby`
*   `s`
*   `samp`
*   `script`
*   `section`
*   `select`
*   `small`
*   `span`
*   `strong`
*   `sub`
*   `sup`
*   `svg`
*   `table`
*   `template`
*   `textarea`
*   `time`
*   `u`
*   `ul`
*   `var`
*   `video`
*   `wbr`

### Sectioning contents (Contenuti di sezionamento)

Questi elementi suddividono il documento in sezioni, ognuna delle quali può avere una **propria struttura di titoli** (**outline**). Quindi puoi inserire più titoli h1, al contrario di quanto accadeva prima dell'HTML5, quando era consentito solo un h1 per pagina.

*   `article`
*   `aside`
*   `nav`
*   `section`

### Heading contents (Contenuti titolo)

In questa categoria rientrano gli elementi titolo e definiscono l'intestazione della sezione.

*   `h1`
*   `h2`
*   `h3`
*   `h4`
*   `h5`
*   `h6`

### Phrasing contents (Contenuti di espressione)

Rientrano in questa categoria gli elementi che identificano il testo del documento. Sostanzialmente sono gli elementi che venivano chiamati _inline._

*   `a`
*   `abbr`
*   `area` (se è discendente di un elemento `map`)
*   `audio`
*   `b`
*   `bdi`
*   `bdo`
*   `br`
*   `button`
*   `canvas`
*   `cite`
*   `code`
*   `data`
*   `datalist`
*   `del`
*   `dfn`
*   `em`
*   `embed`
*   `i`
*   `iframe`
*   `img`
*   `input`
*   `ins`
*   `kbd`
*   `keygen`
*   `label`
*   `map`
*   `mark`
*   `math`
*   `meter`
*   `noscript`
*   `object`
*   `output`
*   `progress`
*   `q`
*   `ruby`
*   `s`
*   `samp`
*   `script`
*   `select`
*   `small`
*   `span`
*   `strong`
*   `sub`
*   `sup`
*   `svg`
*   `template`
*   `textarea`
*   `time`
*   `u`
*   `var`
*   `video`
*   `wbr`

###  Embedded contents (Contenuti incorporatio)

Questi elementi sono quelli che **caricano contenuti esterni** nella pagina web, come  immagini, video e audio.

*   `audio`
*   `canvas`
*   `embed`
*   `iframe`
*   `img`
*   `math`
*   `object`
*   `svg`
*   `video`

### Interactive contents (Contenuti interattivi)

Sono quelli elementi che permettono agli utenti di interagire con la pagina web, tramite dispositivi di input (mouse, tastiera, touchscreen, microfono).

*   `a`
*   `audio` (se l'attributo `controls` è presente)
*   `button`
*   `embed`
*   `iframe`
*   `img` (se l'attributo `usemap` è presente)
*   `input` (se l'attributo `type` non è impostato sullo stato `hidden`)
*   `keygen`
*   `label`
*   `object` (se l'attributo `usemap` è presente)
*   `select`
*   `textarea`
*   `video`  (se l'attributo `controls` è presente)

Esistono però alcuni elementi che non ricadono in **nessuna** categoria. L'elemento `html` per esempio, esso rappresenta la **radice** di un documento HTML (root element) o l'elemento `head`, in cui sono inseriti i **metadati** del documento. Altri elementi ricadono in più categorie, come l'elemento `a` (flow, phrasing e interactive), l'elemento `audio` (embedded e interactive). [![Nuove categorie di contenuti: addio block e inline](http://www.giuseppenardella.it/wp-content/uploads/2015/02/Tipi-di-contenuti-HTML11.png)](http://www.giuseppenardella.it/wp-content/uploads/2015/02/Tipi-di-contenuti-HTML11.png)

## Conclusioni

Da quello che abbiamo detto finora, si evince che nessuna categoria degli elementi HTML fa riferimento alla presentazione degli stessi, come invece avveniva con gli elementi block e inline, ma come gli elementi definiscono la struttura di un documento web. Tutto ciò che riguarda la presentazione viene gestito con i CSS. Bisogna dire che i **fogli di stile di default** dei browser hanno mantenuto la proprietà `display:block` per quegli elementi che si trovavano nella categoria block, e `display:inline` per quelli che si trovavano nella categoria inline. Spero che il post ti sia piaciuto. Magari vorresti condividerlo o lasciare un commento
