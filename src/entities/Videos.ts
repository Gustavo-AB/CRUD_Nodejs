import { Column, PrimaryColumn, CreateDateColumn, Entity, ManyToOne, JoinColumn } from "typeorm"
import { v4 as uuid } from "uuid"
import { Category } from "./Category"


@Entity("videos")
export class Video{

    @PrimaryColumn()
    id:string

    @Column()
    name:string

    @Column()
    description:string

    @Column()
    category_id:string

    @ManyToOne(() => Category)
    @JoinColumn({ name:"category_id" })
    category:Category

    @Column()
    duration:number

    @CreateDateColumn()
    created_at:Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}