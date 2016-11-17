const request = require('request');
const querystring = require('querystring');

exports.coord2detailaddr = function (lon, lat, callback) {
    let baseUrl = 'https://apis.daum.net/local/geo/coord2detailaddr?';
    let opts = {
        'x': lon,
        'y': lat,
        'inputCoordSystem': 'WGS84',
        'output': 'json',
        'apikey': 'YOUR-APIKEY'
    };
    let url = baseUrl + querystring.stringify(opts);

    request(url, (error, res, body) => {
        if (error) {
            callback('404 Not Found', null);
        } else {
            if (JSON.parse(body).new.name) {
                callback(null, JSON.parse(body).new.name);
            } else {
                callback(null, JSON.parse(body).old.name);
            }
        }
    });
};

exports.addr2coord = function (query, callback) {
    let baseUrl = 'https://apis.daum.net/local/geo/addr2coord?';
    let opts = {
        'q': query,
        'page_size': 1,
        'output': 'json',
        'apikey': 'YOUR-APIKEY'
    };
    let url = baseUrl + querystring.stringify(opts);

    request(url, (error, res, body) => {
        if (error) {
            callback('404 Not Found', null, null, null);
        } else {
            let data = JSON.parse(body).channel;
            if (data.result === '0') {
                callback('404 Not Found', null, null, null);
            } else {
                let title = data.item[0].title;
                let lon = data.item[0].lng;
                let lat = data.item[0].lat;
                callback(null, title, lon, lat);
            }
        }
    });
};
