//metadata
var data = JSON.stringify({
    "path": "/Nfile.txt"
  });
  
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("POST", "https://api.dropboxapi.com/2/files/get_metadata");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer DeC4qS28F08AAAAAAAAAAaCSSUCURRYcHzTQDO4py707k_CgQ9zi1MaNeoLIM0Zc");
  
  xhr.send(data);


