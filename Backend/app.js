const dotenv=require("dotenv")
dotenv.config();
const express =require('express');
const cors=require("cors")
const app = express();
const cookieParser=require("cookie-parser");
const connectDb=require("./db/db")
connectDb();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const userRoutes=require("./routes/user.routes")
const captainRoutes=require("./routes/captain.routes")

app.get("/",(req,res)=>{
    res.send("hello")
})

app.use("/users",userRoutes)
app.use("/captain",captainRoutes)


module.exports=app;