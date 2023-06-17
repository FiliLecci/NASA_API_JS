# NASA_API_JS
NOTA:
L'immagine non viene aggiornata a mezzanotte ma bensì più tardi ad un'ora non fissa, è quindi probabile che il programma scarichi l'immagine del giorno precedente se eseguito in orari prossimi a mezzanotte.

Un semplice programma javascript che interroga il server REST della NASA usando le Open API's da essa messe a disposizione e consultabili alla pagina
https://api.nasa.gov/ , che scarica in una directory l'immagine astronomica del giorno. Viene in partiolare usata l'API nominata APOD (Astronomical Picture Of the Day).

Per poter eseguire con successo le richieste <b>il programma ha bisogno di una KEY</b> che può essere generata in modo totalmente gratuito e veloce al sito sopra citato compilando i campi che vengono richiesti (nome, cognome, email).

Una volta generata la propria KEY, sarà necessario copiarla ed andarla a sostituire a "DEMO_KEY" (index.mjs, riga 5).

<b>Per eseguire il file all'avvio del computer:</b>

1) creare un file nome.txt
2) aprire il file e scrivere "node path/index.mjs" dove path è il percorso fino al vostro file index.mjs
3) cambiare l'estensione da .txt a .bat (se non si visualizzano le estensioni dei file aprire "esplora risorse", in alto andare su "Visualizza" e infine selezionare tra i checkbox sulla destra la voce "Estensioni nomi file")
4) verificare che il file funzioni facendo doppio click e verificando che l'immagine venga scaricata correttamente nella directory indicata
5) premere win+R per aprire Esegui e digitare "shell:startup"
6) trascinare il file precedentemente creato nella cartella appena aperta
