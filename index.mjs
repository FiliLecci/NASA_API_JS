import fetch from "node-fetch";
import fs from "fs";
import https from "https";

let key = "DEMO_KEY";
let url = ["https://api.nasa.gov/planetary/apod?api_key=", key].join("");
console.log(url);

let response = await fetch(url);
let json = await response.json();
let imageUrl = json['url'];

console.log(json);

let imagePath = "C:/Users/user/Desktop/immagini/" + json["title"] + "-" + json["copyright"] + ".jpg";

const file = fs.createWriteStream(imagePath);
const request = https.get(imageUrl, function(response) {
   response.pipe(file);
   // after download completed close filestream
   file.on("finish", () => {
       file.close();
       console.log("Download Completed");
   });
});
