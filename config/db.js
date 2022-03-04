const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://btamega:Oussoubidiagna1@khassodesign.o02oy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
            
    const connectDB = async()=>{
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        client.connect(err => {
        try {
        const collection = client.db("test").collection("devices");
        console.log("Connexion réussie avec succès");
        } catch (error) {
            console.error("Connexion échouée");
            client.close();
        }
        });
    }

    module.exports= connectDB;