export default ['$http', function ($http) {
    const URL = 'http://api.openweathermap.org/data/2.5/weather';

    const request = {
        method: 'GET',
        url: URL,
        params: {
            q: 'Vigo',
            mode: 'json',
            units: 'metric',
            lang: 'en',
            appid: process.env.OPEN_WEATHER_MAP_APIKEY
        }
    };

    return $http(request);
}];