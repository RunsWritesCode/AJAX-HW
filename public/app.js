var makeRequest = function (url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var beers = JSON.parse(jsonString);
  populateList(beers);
}

var populateList = function(beers){
  var ul = document.getElementById('beer-list');
  console.log(beers);
  beers.forEach(function(beer){
    var li = document.createElement('li');
    li.innerHTML = beer.name + "</br><img class='beer-image' src=" + beer.image_url + ">";
    ul.appendChild(li);
  });
}

var app = function(){
  var url = 'https://api.punkapi.com/v2/beers';
  makeRequest(url, requestComplete);
}

document.addEventListener('DOMContentLoaded', app);
