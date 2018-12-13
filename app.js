const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const routes=require('./routes');
const port=process.env.PORT||8080;
const app=express();
app.set('views',__dirname+'/views');
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.get('/',routes.home);
app.get('/property1',routes.property1);
app.get('/property2',routes.property2);
app.get('/property3',routes.property3);
app.get('/property4',routes.property6);
app.get('/property5',routes.property5);
app.get('/property6',routes.property6);
app.listen(port,()=>{
  console.log('Server started on '+port);
});
