---
layout:   post
title:    "Progressive Enhancement - Il WEB a strati"
categories: general
---


Se ti occupi di sviluppo web già da qualche tempo, il concetto di **progressive enhancement** (che in italiano dovrebbe tradursi con <i>miglioramento progressivo</i>), non dovrebbe esserti sconosciuto.

Il progressive enhancement è una **metodologia** per realizzare pagine web che permette agli sviluppatori di concentrarsi prima di tutto sul **contenuto**, assicurando in questo modo **l'accessibilità** tramite qualsiasi browser al maggior numero di utenti, e aggiungendo successivamente **funzionalità avanzate** per i browser che le supportano.

Vediamo innanzi tutto in cosa consiste, per poi fare un esempio.

## Graceful degradetion Vs. Progressive enhancement.
Fino al 2003, anno in cui per la prima volta Steve Champeon coniò  il termine di progressive enhancement alla [SWSX](http://it.wikipedia.org/wiki/South_by_Southwest), la metodologia principale per la realizzazione di contenuti web era quello della **graceful degradation**.

### L'approccio della graceful degration
La graceful degradation parte dalla realizzazione di contenuti web per i browser più avanzati. Successivamente si testano i browser più datati, apportando le modifiche per una **degradazione accettabile**. In questo modo i browser più vecchi offrono un'esperienza più povera ma comunque accettabile.

### L'approccio del progressive enhancement
Il progressive enhancement parte, invece, dalla situazione opposta: prima ci si concentra sul **contenuto**, in modo che sia accessibile a tutti i browser, successivamente si aggiungono le funzionalità relative alla **presentazione** e al **comportamento**.

## Il Web a strati: contenuto, presentazione e comportamento
**Separazione, separazione, separazione**: il mantra degli standard web.

Preogettare secondo gli standard, significa dividere il contenuto, dalla presentazione e dal comportamento. Per raggiungere questo obiettivo ricorriamo ai seguenti linguaggi:

* **HTML** (HyperText Markup Language) per la creazione del contenuto e della **struttura**
* **CSS** (Cascading Style Sheets) per l'implementazione degli aspetti relativi alla presentazione (**layout e grafica**)
* **Javascript** per aggiungere **interazione** ai nostri progetti

## Un esempio pratico
Nell'esempio che segue, realizzeremo un menù a schede (tab box). Niente di complicato, giusto quello che serve per capire come funziona il progressive enhancement.

### 1. Il contenuto prima di tutto
Partiamo quindi dalla struttura delle nostre schede, che a livello elementare non sono altro dei link che puntano a altri elementi nella stessa pagina.

Avremo quindi un elenco di voci per il nostro menu rappresentato da una **lista non ordinata **che puntano a delle **sezioni**.

<p data-height="300" data-theme-id="11923" data-slug-hash="XJeKYx" data-default-tab="result" data-user="gnardella" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/gnardella/pen/XJeKYx/">PE_HTML</a> by Giuseppe (<a href="http://codepen.io/gnardella">@gnardella</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

 Come vedi, quando di clicca su un collegamento, la pagina si sposta in alto per visualizzare la sezione che ci interessa. A questo punto per tornare al menù, bisogna scorrere con la barra verticale sulla destra. L'aspetto è **minimale** ma comunque viene **garantito l'accesso a tutte le informazioni**.

### 2. Facciamoci belli

Aggiungiamo adesso qualche regola CSS per cambiare l'**aspetto** del nostro menù.

<p data-height="400" data-theme-id="11923" data-slug-hash="YPrNXM" data-default-tab="result" data-user="gnardella" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/gnardella/pen/YPrNXM/">PE_CSS</a> by Giuseppe (<a href="http://codepen.io/gnardella">@gnardella</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

A questo punto l'aspetto assomiglia effettivamente a quello di un menù a schede. Inoltre è migliorata la navigazione perché non dobbiamo utilizzare la barra di scorrimento per avere di nuovo accesso alle voci del menù.

### 3. Un po' di movimento
Infine miglioriamo la nostra **user experience** (okay sto esagerando).

<p data-height="500" data-theme-id="11923" data-slug-hash="MYEJvr" data-default-tab="result" data-user="gnardella" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/gnardella/pen/MYEJvr/">PE_Javascript</a> by Giuseppe (<a href="http://codepen.io/gnardella">@gnardella</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Con l'aggiunta di qualche riga di javascript vengono mostrate le schede che ci interessano, inoltre il contenitore delle stesse si adatta al contenuto.

Come hai potuto notare, utilizzando il progressive enhancement come metodologia per in tuoi progetti, potrai raggiungere ottimi risultati, **garantendo l'accesso ai contenuti** per tutti gli utenti (indifferentemente dalle tecnologie impiegate) **senza sacrificare la qualità**, di cui potrà usufruire chi possiede tecnologia più moderne.

## I principi del progressive enhancement
Per finire, ecco l'elenco dei principi fondamentali del progressive enhancement.

* Il contenuto di base dovrebbe essere accessibile a tutti i browser
* Le funzionalità di base dovrebbero essere accessibili a tutti i browser
* Una marcatura concisa e semantica racchiude tutto il contenuto
* Il layout avanzato è fornito da CSS esterni
* Il comportamento avanzato è fornito da codice JavaScript esterno e non intrusivo
* Vengono rispettate le preferenze del browser dell’utente finale

Spero che l'articolo sia piaciuto.
