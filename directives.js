weatherApp.directive("weatherResult", function() {
    return {
        restrict: 'AECM',
        templateUrl: 'directives/weatherResult.html',
        replace: true,
        scope: {
            forecastObject: "=",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
})