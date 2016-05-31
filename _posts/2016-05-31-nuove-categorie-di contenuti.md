---
layout:   post
title:    "Block e Inline addio - Nuove categorie di contenuti"
categories: test
---


Prima dell'introduzione delle specifiche HTML5, eravamo abituati a raggruppare gli elementi in due categorie: **block** e **inline**.

## Block e inline: le differenze

### Caratteristiche principali degli elementi block level

* Se a questo tipo di elemento non attribuiamo una larghezza mediante la proprietà width, l'elemento block si estenderà per tutta la larghezza dell'elemento contenitore.
* Gli elementi di blocco nel nostro flusso html si disporranno in una nuova riga anche se la loro larghezza è inferiore a quella dell'elemento contenitore.
* Un elemento block  si estende in altezza per comprendere un eventuale elemento figlio.
* Per questo tipo di elemento possiamo facilmente impostare altezza, larghezza, margini e padding.
* Un elemento block può contenere altri elementi block o elementi inline.

### Caratteristiche principali degli elementi inline

* Un elemento inline non interrompe il normale flusso della pagina causando la creazione di una nuova riga e si dispone in linea rispetto al testo contenuto in un elemento.
* Due elementi inline seguenti si dispongono un di fianco all'altro.
* Un elemento inline è dotato di larghezza e altezza tali da comprendere appena il suo contenuto.
* Mediante i CSS non modifichiamo altezza e larghezza di un elemento inline, ma possiamo impostare di  il padding, i margini e il bordo.
* Un elemento inline può contenere solo altri elementi inline.




Come puoi notare, le caratteristiche che differenziano gli elementi block da quelli inline, si riferiscono ad aspetti relativi alla presentazione degli elementi stessi: infatti tramite i CSS possiamo impostare la proprietà *display* degli elementi su **block **e** inline **ottenendo gli stessi risultati.

Poiché gli standard Web stabiliscono la divisione tra contenuto e presentazione, la distinzione in block e inline è stata eliminata dalle specifiche HTML5, definendo [nuove categorie di contenuti](http://www.w3.org/TR/2014/REC-html5-20141028/dom.html#kinds-of-content).

## Nuove categorie degli elementi
Le specifiche HTML5 definiscono gli elementi in modo da avere un certo **significato semantico**, cioè essi descrivono il contenuto in base al loro **uso** e non come appaiono, quindi sono state identificate nuove categorie per gli elementi:

* Metadata
* Flow
* Sectioning
* Heading
* Phrasing
* Embedded
* Interactive

###   Metadata contents (Contenuti di metadati)
Questi elementi si trovano nella sezione di **intestazione** della pagina web, e contengono i **metadati**, ovvero le informazioni sul documento stesso, impostazioni sulla presentazione (regole CSS) e sul comportamento (script), riferimenti a documenti esterni (fogli di stile CSS  e file Javascript esterni).

* <code>base</code>
* <code>link</code>
* <code>meta</code>
* <code>noscript</code>
* <code>script</code>
* <code>style</code>
* <code>template</code>
* <code>title</code>

###  Flow contents (Contenuti di flusso)
Rientrano in questa categoria gli elementi utilizzati nel **corpo** del documento e comprendono la quasi totalità dei tag HTML.

* <code>a</code>
* <code>abbr</code>
* <code>address</code>
* <code>area</code> (se è discendente di un elemento <code>map</code>)
* <code>article</code>
* <code>aside</code>
* <code>audio</code>
* <code>b</code>
* <code>bdi</code>
* <code>bdo</code>
* <code>blockquote</code>
* <code>br</code>
* <code>button</code>
* <code>canvas</code>
* <code>cite</code>
* <code>code</code>
* <code>data</code>
* <code>datalist</code>
* <code>del</code>
* <code>dfn</code>
* <code>div</code>
* <code>dl</code>
* <code>em</code>
* <code>embed</code>
* <code>fieldset</code>
* <code>figure</code>
* <code>footer</code>
* <code>form</code>
* <code>h1</code>
* <code>h2</code>
* <code>h3</code>
* <code>h4</code>
* <code>h5</code>
* <code>h6</code>
* <code>header</code>
* <code>hr</code>
* <code>i</code>
* <code>iframe</code>
* <code>img</code>
* <code>input</code>
* <code>ins</code>
* <code>kbd</code>
* <code>keygen</code>
* <code>label</code>
* <code>main</code>
* <code>map</code>
* <code>mark</code>
* <code>math</code>
* <code>meter</code>
* <code>nav</code>
* <code>noscript</code>
* <code>object</code>
* <code>ol</code>
* <code>output</code>
* <code>p</code>
* <code>pre</code>
* <code>progress</code>
* <code>q</code>
* <code>ruby</code>
* <code>s</code>
* <code>samp</code>
* <code>script</code>
* <code>section</code>
* <code>select</code>
* <code>small</code>
* <code>span</code>
* <code>strong</code>
* <code>sub</code>
* <code>sup</code>
* <code>svg</code>
* <code>table</code>
* <code>template</code>
* <code>textarea</code>
* <code>time</code>
* <code>u</code>
* <code>ul</code>
* <code>var</code>
* <code>video</code>
* <code>wbr</code>

### Sectioning contents (Contenuti di sezionamento)
Questi elementi suddividono il documento in sezioni, ognuna delle quali può avere una **propria struttura di titoli** (**outline**). Quindi puoi inserire più titoli h1, al contrario di quanto accadeva prima dell'HTML5, quando era consentito solo un h1 per pagina.

* <code>article</code>
* <code>aside</code>
* <code>nav</code>
* <code>section</code>

### Heading contents (Contenuti titolo)
In questa categoria rientrano gli elementi titolo e definiscono l'intestazione della sezione.

* <code>h1</code>
* <code>h2</code>
* <code>h3</code>
* <code>h4</code>
* <code>h5</code>
* <code>h6</code>

### Phrasing contents (Contenuti di espressione)
Rientrano in questa categoria gli elementi che identificano il testo del documento. Sostanzialmente sono gli elementi che venivano chiamati *inline.*

* <code>a</code>
* <code>abbr</code>
* <code>area</code> (se è discendente di un elemento <code>map</code>)
* <code>audio</code>
* <code>b</code>
* <code>bdi</code>
* <code>bdo</code>
* <code>br</code>
* <code>button</code>
* <code>canvas</code>
* <code>cite</code>
* <code>code</code>
* <code>data</code>
* <code>datalist</code>
* <code>del</code>
* <code>dfn</code>
* <code>em</code>
* <code>embed</code>
* <code>i</code>
* <code>iframe</code>
* <code>img</code>
* <code>input</code>
* <code>ins</code>
* <code>kbd</code>
* <code>keygen</code>
* <code>label</code>
* <code>map</code>
* <code>mark</code>
* <code>math</code>
* <code>meter</code>
* <code>noscript</code>
* <code>object</code>
* <code>output</code>
* <code>progress</code>
* <code>q</code>
* <code>ruby</code>
* <code>s</code>
* <code>samp</code>
* <code>script</code>
* <code>select</code>
* <code>small</code>
* <code>span</code>
* <code>strong</code>
* <code>sub</code>
* <code>sup</code>
* <code>svg</code>
* <code>template</code>
* <code>textarea</code>
* <code>time</code>
* <code>u</code>
* <code>var</code>
* <code>video</code>
* <code>wbr</code>

###  Embedded contents (Contenuti incorporatio)
Questi elementi sono quelli che **caricano contenuti esterni** nella pagina web, come  immagini, video e audio.

* <code>audio</code>
* <code>canvas</code>
* <code>embed</code>
* <code>iframe</code>
* <code>img</code>
* <code>math</code>
* <code>object</code>
* <code>svg</code>
* <code>video</code>

### Interactive contents (Contenuti interattivi)
Sono quelli elementi che permettono agli utenti di interagire con la pagina web, tramite dispositivi di input (mouse, tastiera, touchscreen, microfono).

* <code>a</code>
* <code>audio</code> (se l'attributo <code>controls</code> è presente)
* <code>button</code>
* <code>embed</code>
* <code>iframe</code>
* <code>img</code> (se l'attributo <code>usemap</code> è presente)
* <code>input</code> (se l'attributo <code>type</code> non è impostato sullo stato <code>hidden</code>)
* <code>keygen</code>
* <code>label</code>
* <code>object</code> (se l'attributo <code>usemap</code> è presente)
* <code>select</code>
* <code>textarea</code>
* <code>video</code>  (se l'attributo <code>controls</code> è presente)

Esistono però alcuni elementi che non ricadono in **nessuna** categoria. L'elemento <code>html</code> per esempio, esso rappresenta la **radice** di un documento HTML (root element) o l'elemento <code>head</code>, in cui sono inseriti i **metadati** del documento.

Altri elementi ricadono in più categorie, come l'elemento <code>a</code> (flow, phrasing e interactive), l'elemento <code>audio</code> (embedded e interactive).

## Conclusioni
Da quello che abbiamo detto finora, si evince che nessuna categoria degli elementi HTML fa riferimento alla presentazione degli stessi, come invece avveniva con gli elementi block e inline, ma come gli elementi definiscono la struttura di un documento web. Tutto ciò che riguarda la presentazione viene gestito con i CSS.

Bisogna dire che i **fogli di stile di default** dei browser hanno mantenuto la proprietà <code>display:block</code> per quegli elementi che si trovavano nella categoria block, e <code>display:inline</code> per quelli che si trovavano nella categoria inline.

Spero che il post ti sia piaciuto.
