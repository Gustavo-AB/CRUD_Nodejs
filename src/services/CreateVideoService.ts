import { Category } from "../entities/Category"
import { AppDataSource } from "../database/data-source"
import { Video } from "../entities/Videos"


type VideoRequest = {
    name:string,
    description:string,
    duration:number,
    category_id:string
}

export class CreateVideoService {
    async execute({ name, description, duration, category_id }:VideoRequest):Promise<Error | Video>{
        const repo = AppDataSource.getRepository(Video)
        const repoCategory = AppDataSource.getRepository(Category)

        const video = repo.create({ name, description, duration, category_id })

        await repo.save(video)

        return video


    }
}