import { ProductController } from "./controller/ProductController"

export const Routes = [{
    method: "get",
    route: "/api/products",
    controller: ProductController,
    action: "all"
}, {
    method: "get",
    route: "/api/products/:id",
    controller: ProductController,
    action: "one"
}, {
    method: "post",
    route: "/api/products",
    controller: ProductController,
    action: "save"
}, {
    method: "put",
    route: "/api/products/:id",
    controller: ProductController,
    action: "update"
}, {
    method: "delete",
    route: "/api/products/:id",
    controller: ProductController,
    action: "remove"
}]
