const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://pujuagarwal5263:7590863884@cluster0.ca58dmt.mongodb.net/",
{useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(()=>{
    console.log("Database Connected Successfully");
}).catch((err)=>{
    console.log("No Connection to Database");
})
