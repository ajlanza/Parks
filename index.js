// 'use strict';

function watch() {
    $('form').submit(event => {
        event.preventDefault();
        const state = $('#searchState').val();
        const maxResults = $('#searchMaxResults').val();
        console.log(state, maxResults);
        getParks(state, maxResults);
    });
}

function getParks(st, max) {
  const query = `?stateCode=${st}&limit=${max}`;
  const url = `https://developer.nps.gov/api/v1/parks${query}&api_key=7fN4nAIssMTPpz0i9OewrBGvD38RiGSCyNQtcpAr`;
  fetch(url)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson, max))
    .catch(error => alert("It broke!"));
    }

function displayResults(responseJson, max) {
    console.log("displaying results");
    document.getElementById('results').innerHTML = "";
    for (let i = 0; i < max; i++){
      let name = responseJson.data[i].fullName;
      let description = responseJson.data[i].description;
      let parkUrl = responseJson.data[i].url;
      console.log(name, parkUrl);
      $("ul#results").append(`<li>${name}: <a href="${parkUrl}">${parkUrl}</a></li><br>
      <li>${description}</li><br><br>`);
    }
    $(".hidden").removeClass("hidden");
}


$(watch);