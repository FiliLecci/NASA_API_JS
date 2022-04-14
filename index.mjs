import fetch from "node-fetch";
import fs from "fs";
import https from "https";

let key = "DEMO_KEY";
let url = ["https://api.nasa.gov/planetary/apod?api_key=", key].join("");
console.log(url);

//richiesta al server REST
let response = await fetch(url);
//conversione della risposta in codice JSON
let json = await response.json();
//parse del codice JSON per ottenere l'URL dell'immagine
let imageUrl = json['url']; //json["hdurl"] per immagini in HD (non sempre sono di qualità superiore)

//stampa del codice JSON perché può fare comodo e fa figo
console.log(json);

//imagePath è la directory in cui verrà salvata l'immagine ed il suo nome
let imagePath = "C:/Users/user/Desktop/immagini/" + json["title"] + "-" + json["copyright"] + ".jpg"; //nota: tenere come estensione .jpg in quanto tutte le immagini sono jpg

//codice preso da: https://stackoverflow.com/questions/11944932/how-to-download-a-file-with-node-js-without-using-third-party-libraries
//(grazie stackoverflow che mi salvi il culo)
const file = fs.createWriteStream(imagePath);
const request = https.get(imageUrl, function(response) {
   response.pipe(file);
   // after download completed close filestream
   file.on("finish", () => {
       file.close();
       console.log("Download Completed");
   });
});
