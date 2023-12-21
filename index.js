const express = require("express");

const app = express();

app.get("/home",(req,res)=>{
    res.status(200).json(
            {
                "name":"Shubham",
                "Class":"10th"
            }
    );
})


app.listen(5050,()=>{
    console.log("Server is runningg at",5050);
});