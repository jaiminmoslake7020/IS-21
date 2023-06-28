import { Express } from "express";
import validateResource from "../middleware/validateResource";
import {createDeveloperHandler, listDeveloperHandler} from '../controller/DeveloperController';
import {createDeveloperSchema} from '../schema/developer.schema';

function developerRoutes(app: Express) {

    /**
     * @openapi
     * '/api/developers':
     *  get:
     *     tags:
     *     - Products
     *     summary: List all products
     *     responses:
     *       200:
     *         description: Success
     *         content:
     *          application/json:
     *           schema:
     *             type: "array"
     *             items:
     *              $ref: '#/components/schema/Developer'
     *       404:
     *         description: Developers not found
     */
    app.get(
        "/api/developers",
        listDeveloperHandler
    );


    /**
     * @openapi
     * '/api/developers':
     *  post:
     *     tags:
     *     - Developers
     *     summary: Create new developer
     *     consumes:
     *     - "application/json"
     *     produces:
     *     - "application/json"
     *     responses:
     *       200:
     *         description: Success
     *         content:
     *          application/json:
     *           schema:
     *             type: "array"
     *             items:
     *              $ref: '#/components/schema/Product'
     *       404:
     *         description: Developer not found
     */
    app.post(
        "/api/developers",
        validateResource(createDeveloperSchema),
        createDeveloperHandler
    );
}

export default developerRoutes;
