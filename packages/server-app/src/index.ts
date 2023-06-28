import express from "express"
import bodyParser from "body-parser"
import { AppDataSource } from "./data-source"
import productRoutes from "./routes/productRoutes";
import swaggerDocs from "./utils/swagger";
import healthRoute from './routes/healthRoute';
import developerRoutes from './routes/developerRoutes';

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(express.json());
    app.use(bodyParser.json())

    // setup express app here
    // ...

    const port = 3000;
    // start express server
    app.listen(port, () => {
        healthRoute(app);
        productRoutes(app);
        developerRoutes(app);
        swaggerDocs(app, port);
        console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")
    });

}).catch(error => console.log(error))
