// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "New York, NY";
    
});

weatherApp.service('weatherService', ['$resource',  function($resource) {

    this.GetWeather = function(city, daycount) {

        var weatherAPI = $resource('http://wetter-backend-production.up.railway.app/wetter', {callback: "JSON_CALLBACK" }, +'&'+ { get: { method: "JSONP"}});
    
        console.log(city + ', ' + daycount + ' days');
        return weatherAPI.get({city: city, days: daycount});
    }   
}])