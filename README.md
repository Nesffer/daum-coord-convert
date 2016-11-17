# DaumMap Coord Convert API

Import
------
```javascript
const map = require('map');
```

Usage
-----
### 좌표를 상세 주소로 변환
```javascript
map.coord2detailaddr(127, 36, (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
```

### 주소를 좌표로 변환
```javascript
map.addr2coord('서울시', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
```
