let express = require('express');
let app = express();
app.use(express.static(__dirname + '/dist/home-page'));
app.get('/*', (req, resp) => {
    resp.sendFile(__dirname + '/dist/home-page');
});
app.listen(process.env.PORT || 8080);
