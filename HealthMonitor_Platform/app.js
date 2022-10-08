
const express = require('express');

const path = require('path');

const app = express();

const pageRouter = require("./routes/pages")

const PORT = 3000;
//body parser
app.use(express.urlencoded({ extended : false }));


//static files
app.use(express.static('./public'));


//view engine
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use("/",pageRouter);



//error:page not found
app.use((req,res,next)=>{
    var err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});


//handling error:
app.use((err, req,res,next)=>{
    res.status(err.status || 500);
    var message = "<h1>"+err.message+"</h1>";
    res.send(message);
});




//seting up server
app.listen(5000,()=>{

    console.log(`listening on port ${PORT}`);
})
