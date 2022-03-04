const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://btamega:Oussoubidiagna1@khassodesign.o02oy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB=async()=>{
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(error => {
        try{
      const collection = client.db("test").collection("devices");
      console.log("MongoDB connection success");
        }catch(error){
            console.error("MongoDB connection fail");
            client.close();
        }
      
    });
}


module.exports=connectDB
