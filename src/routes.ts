import { Router, Request, Response } from "express"
import { CreateCategoryController } from "./controllers/CreateCategoryController"
import { CreateVideoController } from "./controllers/CreateVideoController"
import { DeleteCategoryController } from "./controllers/DeleteCategoryController"
import { DeleteVideoController } from "./controllers/DeleteVideoController"
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController"
import { GetAllVideosController } from "./controllers/GetAllVideosController"
import { UpdateCategoryController } from "./controllers/UpdateCategoryController"
import { UpdateVideoController } from "./controllers/UpdateVideoController"


const routes = Router()

routes.post("/categories", new CreateCategoryController().handle)
routes.post("/videos", new CreateVideoController().handle)

routes.get("/categories", new GetAllCategoriesController().handle)
routes.get("/videos", new GetAllVideosController().handle)
routes.get("/", (req:Request, res:Response) => {
    res.status(200).json({ msg:"Tudo Ok!" })
})

routes.put("/categories/:id", new UpdateCategoryController().handle)
routes.put("/videos/:id", new UpdateVideoController().handle)

routes.delete("/categories/:id", new DeleteCategoryController().handle)
routes.delete("/videos/:id", new DeleteVideoController().handle)

export { routes }