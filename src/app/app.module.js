import angular from 'angular';
import angularmd from 'angular-material';
import angularanimate from 'angular-animate';
import angulararia from 'angular-aria';
import angularmessages from 'angular-messages';
import appComponent from './app.component';

const app = angular.module('app', [angularanimate, angulararia, angularmessages, angularmd]);

app.component('app', appComponent);
app.factory('weatherService', ['$http', function ($http) {
    const URL = 'http://api.openweathermap.org/data/2.5/weather';

    const request = {
        method: 'GET',
        url: URL,
        params: {
            q: 'Vigo',
            mode: 'json',
            units: 'metric',
            lang: 'en',
            appid: '37499dd44886aa89565abd094ecbfc8c'
        }
    };

    return $http(request);
}]);
