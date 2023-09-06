// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "New York, NY";
    
});

weatherApp.service('weatherService', ['$resource',  function($resource) {

    this.GetWeather = function(city, daycount) {

        //$scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
        var weatherAPI = $resource('http://api.weatherapi.com/v1/forecast.json', { callback: "JSON_CALLBACK" }, +'&'+ { get: { method: "JSONP"}});
    
        //$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days, APPID: '6fae2fcded939a4fae5c4eae0ed0d052' });
        return weatherAPI.get({q: city, days: daycount, key: 'dac0db7439794ddfa8a15704233008'});
    }   
}])