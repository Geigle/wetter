weatherApp.directive("weatherResult", function() {
    return {
        restrict: 'AECM',
        templateUrl: 'directives/weatherResult.html',
        replace: true,
        scope: {
            forecastObject: "=",
            unit: "=",
            convertToDate: "&",
            dateFormat: "@",
            fcObjId: "@"
            //idNum: "@"
            //AstroMgr: "="
        }
    }
})

weatherApp.directive("customFooter", function() {
    return {
        templateUrl: 'directives/customFooter.html',
        replace: true
    }
})

weatherApp.directive("astroSection", function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/astroSection.html',
        replace: true,
        scope: {
            sr: "@",
            ss: "@",
            mr: "@",
            ms: "@",
            mp: "@",
            mi: "@",
            astroCtlr: '=',
        }
    }
})
