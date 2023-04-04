const express=require('express');
const Gun=require('gun');
const app=express();
const port=8080;


app.use(Gun.serve);

const server=app.listen(port,()=>{
    console.log(`Listening at port localhost:${port}`);
})
Gun({file:'db/data',web:server});