import  express  from "express";
import {db} from "@repo/db/db"

const app = express();
app.use(express.json());

app.get("/" , function(req,res)
{
    res.json({
        msg : "Health is good !"
    });
    return;
})

app.post("/signUp" , async function(req,res)
{
    const username = req.body.username;
    const password = req.body.password;

    const val = await db.user.create({
        data : {
            username : username , 
            password : password  
        },
    });

    res.json({
        msg: "Done Adding" , 
        id : val.id
    });
    return; 
})

app.listen(3001 , function()
{
    console.log("Connected to port 8000");
});
