let express=require('express');
let route=require('./routes');

let app=express();

app.use('/routes',route);

app.listen(6080);