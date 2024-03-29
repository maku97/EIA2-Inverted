import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace L07_CocktailBar {
    interface Order {
        [type: string]: string | string[];
    }

    let orders: Mongo.Collection;

    // TODO: maybe nicer to use argv for remote/local
    // running on heroku?
    if (process.env.NODE_ENV == "production") {
        // databaseURL = "mongodb+srv://username:password@hostname:port/database";
        // "mongodb+srv://readwrite:<password>@jirkadelloro-obydb.mongodb.net/test?retryWrites=true&w=majority"
        startServer(process.env.PORT);
    } else {
        connectToDatabase("mongodb+srv://readwrite:xuWg4gj65lJKZjz0@jirkadelloro-obydb.mongodb.net");
        // connectToDatabase("mongodb://localhost:27017");
        startServer(5001);
    }

    function startServer(_port: number | string | undefined): void {
        console.log("Starting server on port " + _port);
        let server: Http.Server = Http.createServer();
        server.listen(_port);
        server.addListener("request", handleRequest);
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            console.log("Query", url.query);
            if (url.search) {
                if (url.query["command"] == "retrieve") {
                    let retrieved: Object = await retrieveOrders();
                    _response.write(JSON.stringify(retrieved));
                }
                else
                    storeOrder(url.query);
            }
        }
        
        _response.end();
    }

    async function connectToDatabase(_url: string): Promise<void> {
        console.log("DatabaseServer", _url);
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Cocktailbar").collection("Orders");
        console.log("Connection", orders != undefined);
    }

    async function storeOrder(_order: Order): Promise<void> {
        await orders.insert(_order);
        console.log("Store", _order);
    }

    async function retrieveOrders(): Promise<Object> {
        console.log("Retrieve");
        var cursor: Mongo.Cursor = orders.find();
        let result: Order[] = await cursor.toArray();
        return result;
    }
}