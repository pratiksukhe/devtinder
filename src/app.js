const express= require('express');
const app= express();

app.use('/', (req, res)=>{
    res.send('Hello Welcome to namaste nodejs...!!')
});

app.use('/test', (req, res)=>{
    res.send('Hello from the server')
});

app.use('/hello', (req, res)=>{
    res.send('Hello from the hello route')
 });

app.listen(3000, ()=>{
    console.log('Servrer is successfully listening on port 3000..');
})