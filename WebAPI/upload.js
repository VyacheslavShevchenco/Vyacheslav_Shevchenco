//upload
var XMLHttpRequest = require('xhr2');
 var xhr = new XMLHttpRequest();

var data = "";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://content.dropboxapi.com/2/files/upload");
xhr.setRequestHeader("Dropbox-API-Arg", "{\"path\": \"/Nfile.txt\",\"mode\": \"add\",\"autorename\": true,\"mute\": false,\"strict_conflict\": false}");
xhr.setRequestHeader("Content-Type", "application/octet-stream");
xhr.setRequestHeader("Authorization", "Bearer DeC4qS28F08AAAAAAAAAAaCSSUCURRYcHzTQDO4py707k_CgQ9zi1MaNeoLIM0Zc");

xhr.send(data);

