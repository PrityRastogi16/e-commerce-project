const express = require("express");
const {connection} = require("./db");
const {userRouter} = require("./routes/user.routes")

const app = express();
app.use(express.json());
app.use('/users',userRouter)


app.get("/", (req,res)=>{
    res.json({msg:"Working fine"})
})

app.listen(2002, async()=>{
    try{
        await connection
        console.log("connected")
        console.log("Server is running at port 2002")

    }
    catch(err){
        console.log(err);
    }
     
})
// module.exports = {
//     app
// }