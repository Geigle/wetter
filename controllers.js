// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });

    $scope.submit = function() {
        $location.path("/forecast");
    }
    
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {
    
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';

    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);

    $scope.WeatherResultId = 0;

    $scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK - 273)) + 32);
        
    }

    $scope.convertToDate = function(dt) { 
      
        return new Date(dt * 1000);
        
    };

    $scope.astroCtl = {
        visible: false,
        getVisible: function() { return visible; },
        show: function() { visible = true; console.log(`Astro Visible: ${visible}`); },
        hide: function() { visible = false; console.log(`Astro Visible: ${visible}`); },
        toggle: function() { if(visible) { hide(); } else { show(); } console.log(`Astro Visible: ${visible}`); }
    }

    $scope.dayId = {
        value: 0
    }

    $scope.tempUnit = { 
        F: true, 
        C: false, 
        setF: function() {

            $scope.tempUnit.F = true;
            $scope.tempUnit.C = false;
        },
        setC: function() {

            $scope.tempUnit.F = false;
            $scope.tempUnit.C = true;
        },
        getF: function(){
            return $scope.tempUnit.F;
        },
        getC: function(){
            return $scope.tempUnit.C;
        },
        classF: function() {
            if($scope.tempUnit.F) {
                return 'btn btn-primary disabled';
            }
            else {
                return 'btn btn-primary';
            }
        },
        classC: function() {
            if($scope.tempUnit.C) {
                return 'btn btn-primary disabled';
            }
            else {
                return 'btn btn-primary';
            }
        }
    };
    
}]);