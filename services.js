// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "New York, NY";
    
});

weatherApp.service('weatherService', ['$resource',  function($resource) {

    this.GetWeather = function(city, daycount) {

        var weatherAPI = $resource('https://wetter-backend.gagegeigle.net/wetter', {callback: "JSON_CALLBACK" }, +'&'+ { get: { method: "JSONP"}});
    
        console.log(city + ', ' + daycount + ' days');
        return weatherAPI.get({city: city, days: daycount});
    }   
}]);