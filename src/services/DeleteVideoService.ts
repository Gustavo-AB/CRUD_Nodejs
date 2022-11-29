import { AppDataSource } from "../database/data-source";
import { Video } from "../entities/Videos";


export class DeleteVideoService {
    async execute(id:string){
        const repo = AppDataSource.getRepository(Video)

        if(!(await repo.findOneBy({id}))){
            return new Error("Category does not exists");
        }

        await repo.delete(id)
    }
}