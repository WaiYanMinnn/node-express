const express=require('express');
const morgan=require('morgan');

const hostname='localhost';
const port = 3000;

const app =express();

app.use(morgan('dev'));
app.use(express.json());

app.all('/campsites',(req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
});

app.get('/campsites',(req,res)=>{
    res.end('Will send all the campsites to you');
});
app.post('/campsites',(req,res)=>{
    res.end(`Will add the campsite:${req.body.name} with the description of ${req.body.description}`);
});

app.put('/campsites',(req,res)=>{
    res.statusCode=403;
    res.end('PUT operation is not supported on /campsites');

});

app.delete('/campsites',(req,res)=>{
    res.end('Deleting all campsites');

});

app.get('/campsites/:campsiteId',(req,res)=>{
    res.end(`Will send detail of the campsite : ${req.params.campsiteId} to you`);

});

app.post ('/campsites/:campsiteId',(req,res)=>{
    res.statusCode=403;
    res.end(`POST operation is not supported on /campsite/${req.params.campsiteId}`);
});

app.put('/campsites/:campsiteId',(req,res)=>{
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end (`Will update the campsite: ${req.body.name} with the description: ${req.body.description}`);

});
app.delete('/campsites/:campsiteId',(req,res)=>{
    res.end(`Deleting the campsite : ${req.params.campsiteId}`);
});



app.use(express.static(__dirname+ '/public'));

app.use((req,res)=>{

    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is an express server</h1></body></html>');

});
app.listen(port,hostname,()=>{
    console.log(`Server Running at http://${hostname}:${port}`);
});