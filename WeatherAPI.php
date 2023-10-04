<?php
//konekcija na OpenWeatherAPI
function getWeather($city){
$apiKey = "a3a95a51ae1038e40c4d54772a47f952";
$url= "api.openweathermap.org/data/2.5/weather?q=".$city."&units=metric&appid=".$apiKey." ";

$ch = curl_init();

curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_VERBOSE, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$response = curl_exec($ch);

curl_close($ch);
$data = json_decode($response);
$currentTime = time();
return $data;
}
?>