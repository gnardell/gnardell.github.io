---
layout:   post
title:    "Come funziona il web"
categories: general
---

Se ti sei mai chiesto quale sia la differenza tra internet e web, oppure tra client e server, le righe che seguono potranno esserti di aiuto.

##1. La differenza fra Internet e Web  

Iniziamo facendo chiarezza su due termini che spesso vengono impiegati uno al posto dell'altro.

<dfn>**Internet**</dfn>, spesso definita la *"rete delle reti"*, è un insieme di reti di computer sparse per il mondo e collegate tra loro, al fine di **scambiare informazioni** fra gli utenti che vi accedono.
Le modalità impiegate per questo scambio sono di vario tipo: email, trasferimento di file, VoIP e il World Wide Web. Gli standard che definiscono come scambiare informazioni sono i **protocolli**

Il <dfn>**World Wide Web**</dfn> (abbreviato semplicemente con Web), è uno dei servizi che utilizzano internet per lo scambio di informazioni. La sua caratteristica principale consiste nella possibilità di usufruire di **contenuti**, collegati tra loro attraverso **collegamenti ipertestuali**, comunemente chiamati <dfn>**link**</dfn>. Il protocollo impiegato è l'<abbr>**HTTP**</abbr> (HyperText Transfer Protocol).

##2. Qualche parola sui Browser
Per poter accedere al Web vengono impiegati dei software chiamati <dfn>**web browser**</dfn> o più semplicemente **browser**. Alcuni di questi vengono forniti direttamente con il sistema operativo impiegato dal computer: Internet Explorer è il browser per i sistemi operativi Windows e Safari per OS X. Altri invece possono essere installati in un secondo momento, come Chrome, Firefox, Opera e altri meno diffusi.
Di questi esistono poi le versioni per i dispositivi mobili (iPhone, iPad, dispositivi che utilizzano Android e molti altri).

Gli **aggiornamenti** ai browser vengono rilasciati in maniera abbastanza regolare per fornire un supporto maggiore alle nuove caratteristiche HTML e CSS.
Inoltre ormai tutti i browser includono dei tool che facilitano lo sviluppo di siti web, altri ancora possono essere installati in un secondo momento.

Sta a ognuno testare i vari browser e poi scegliere quello più idoneo alle proprie esigenze.

3. I Server Web

Ma dove si trovano le informazioni a cui vogliamo accedere con i browser?
Esistono dei computer costantemente collegati a internet, i **server** , su cui girano delle particolari applicazioni chiamate appunto **server web**. I server hanno il compito di gestire le richieste di pagine web di un **client**, dove invece è installato il browser (un computer personale, un tablet o uno smartphone). La comunicazione tra server e client avviene tramite il protocollo HTTP, o nella versione sicura, tramite HTTPS.

Spesso la denominazione server web viene impiegata anche per indicare il computer che ospita le pagine web.


##4. Come si accede al Web
Dalle righe precedenti si può intuire che l'accesso al Web avviene tramite dispositivi di vario tipo e formato: desktop, laptop, tablet, smartphone, tv, console per videogiochi e in futuro ne potrebbero essere aggiunti di altri.

Oltre a questi dispositivi di uso comune, bisogna tenere presente che esistono ulteriori modalità di accesso al Web: le **tecnologie assistive**. Queste altro non sono che quelle tecnologie (sia hardware che software), realizzate ad hoc per rendere **accessibili e usabili** anche a persone con **disabilità**.

##5. Un indirizzo per le risorse Web: l'URL
Ogni pagina e risorsa sul Web possiede il suo indirizzo univoco chiamato <dfn>**URL**</dfn> (Uniform Resource Locator).
Vediamo quali sono le parti che compongono un URL.

**http://**
La prima parte che compone l'URL definisce il protocollo impiegato per lo scambio di informazioni, generalmente HTTP o HTTPS (versione sicura).

**www.ilmiosito.it**
La parte successiva è il <dfn>**nomehost**</dfn> e rappresenta l'indirizzo fisico del server dove risiede la risorsa. Può essere espresso, come nel nostro caso con un <dfn>**nome di dominio**</dfn> (www.miosito.it) o direttamente tramite l'<dfn>**indirizzo IP**</dfn> (un'etichetta numerica che identifica in maniera univoca il server, come 107.137.205.80).

**/esempi/capitolo_1/prova.html**
L'ultima parte rappresenta il percorso assoluto alla risorsa che stiamo cercando: *prova.html*. Le parole separate dagli slash rappresentano i nomi delle directory e iniziano con la directory principale (indicata dallo / iniziale).

Avrete notato che non sempre l'ultima parte dell'URL è composta dal nome della risorsa, ma puntano a una directory:

* http://www.miosito.it
* http://www.miosito.it/esempi/

Quando il server riceve una richiesta di questo tipo, cerca nella directory il documento di default, solitamente *index.html*. Alcuni server possono anche utilizzare *defalut.htm*. Inoltre se per la realizzazione del documento è stato impiegato un linguaggio di programmazione **server-side**, il documento di default può essere *index.php* oppure *index.asp*.

##Mettiamo tutto insieme.
Per concludere vediamo quali sono le fasi tipiche che occorrono prima che il documento web che cerchiamo sia visaulizzato nel nostro browser.

1. La **richiesta** di una pagina web inizia nel momento in cui digitiamo l'URL nel browser o quando clicchiamo su un link. Come abbiamo visto l'URL contiene tutte le informazioni per arrivare a una specifica risorsa che si trova su uno specifico server in Internet.
2. Il browser effettua quindi una richiesta HTTP al server contenuto nella nostra URL per ottenere una specifica **risorsa**. Se l'URL contiene solo una directory e non il nome della risorsa, vuol dire che sta richiedendo il documento di default.
3. Il server cerca il documento richiesto, restituendo una risposta HTTP.

    * se non trova la risorsa, restituisce un **errore 404** (Risorsa non trovata),
    * se il documento viene trovato, invia quest'ultimo al nostro browser.

4. Il browser a questo punto analizza il documento, se al suo interno sono contenute video, immagini, file musicali o altre risorse esterne, invia nuovamente una richiesta al server per ottenere queste nuove risorse.
5. A questo il browser inserisce nella pagina HTML le nuove risorse ottenute, visualizzando il documento completo sul monitor.

Spero che l'articolo sia stato di gradimento.
