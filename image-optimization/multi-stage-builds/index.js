const dotenv=require('dotenv'); 
dotenv.config({ path: './env' });

dotenv.config();

const express=require("express");
const app=express();

app.get('/',(req,res)=>{
  res.send(`Learning to Optimize Docker Images with DevOpsCube!`);
});


app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log(`Error: ${err.message}`);
    }else{
        console.log(`Listening on port ${process.env.PORT}`);
    }
  }
)
