const countries=document.querySelectorAll("path");
const url="https://restcountries.eu/rest/v2";
var countryData;
fetch(url)
        .then(
          response=>response.json())
        .then(
          data=>countryData = data)
        .catch(
          error=>console.log("Error:", error));
  
function clearCountry(){
  for(let i=0;i<countries.length;i++) {
    if (countries[i].classList.contains("clicked")) 
        countries[i].classList.remove("clicked");
  }
}
function clearHeader(){
  document.querySelector("h1").innerText="Country";
  document.querySelector("h2").innerText="Capital";
}
function highlightCountry(country){
  var name=country.getAttribute("name");
  country.classList.add("clicked");
  document.querySelector("h1").innerText=name;
  document.querySelector("h1").style.visibility="visible";
  for(let i=0;i<countryData.length;i++){
   if(country.id==countryData[i].alpha2Code){
    document.querySelector("h2").innerText="The capital city is  "+countryData[i].capital;
    document.querySelector("h2").style.visibility="visible";
                        }
                }
}
const redovi=document.querySelectorAll("tr");
document.addEventListener("click",function(e){
    if(e.target.hasAttribute("d")){
        highlightCountry(e.target);
    }
    if(e.target.id=="selectagain"){
      for(let i=0;i<countries.length;i++) {
        if (countries[i].classList.contains("clicked")) {
            for(let j=0;j<countryData.length;j++){
              if(countries[i].getAttribute("id")==countryData[j].alpha2Code) {
                for(let k=0;k<redovi.length;k++){
                    if(redovi[k].innerText.replace(/[^a-z]/gi, '')==countryData[j].capital)
                      {
                        redovi[k].style.display="none";
                      }
                }
              }
            }
           }
      }
      clearCountry();
      clearHeader();
    }
    if(e.target.id=="show"){
      for(let i=0;i<countries.length;i++) {
        if (countries[i].classList.contains("clicked")) {
            for(let j=0;j<countryData.length;j++){
              if(countries[i].getAttribute("id")==countryData[j].alpha2Code) {
                for(let k=0;k<redovi.length;k++){
                    if(redovi[k].innerText.replace(/[^a-z]/gi, '')==countryData[j].capital)
                      {
                        redovi[k].style.display="";
                      }
                }
              }
            }
           }
      }
    }
});
//jQuery
jQuery(document).ready(function() {
  jQuery("table").hide();
  jQuery("#show").click(function () {
    jQuery('html, body').animate({
      scrollTop: jQuery("#tablica").offset().top}, 1500);
    jQuery("table").fadeIn(2000);
  });
  jQuery("#selectagain").click(function () {
    jQuery('html, body').animate({
      scrollTop: jQuery("h1").offset().top}, -1500);
    jQuery("table").hide();
  });
var requestUrl = "http://ip-api.com/json";
jQuery.ajax({
  url: requestUrl,
  type: 'GET',
  success: function(json)
  {
    var local_country=json.country;
    fill_location(local_country);
  },
  error: function(err)
  {
    console.log("Error:" + err);
  }
});
function fill_location(local_country){
  jQuery("#location").empty();
  jQuery("#location").append('<i class="fas fa-location-arrow" id="arrow"></i>')
  jQuery("#location").append(" You are from "+local_country);
  jQuery("#location").append(". Click on it to find out what's the weather like in the capital");
}
jQuery("#nightmode").click(function () {
  var light_bg="rgb(107, 148, 177)";
  var dark_bg="rgb(6, 23, 53)";
  var light_txt="black";
  var dark_txt="white";
  var mode;
  if (jQuery("body").css("background-color")==light_bg) 
      mode="dark";
  else 
      mode="light";
  jQuery("body").css("background-color",eval(mode+"_bg"));
  jQuery("#nightmode").css("background-color",eval(mode+"_bg"));
  jQuery("h1").css("color",eval(mode+"_txt"));
  jQuery("h2").css("color",eval(mode+"_txt"));
  jQuery("#location").css("color",eval(mode+"_txt"));
});
});