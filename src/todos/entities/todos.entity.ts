import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("todos")
export class Todo {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({type: 'varchar', length: 255})
   title: string;

   @Column({type: 'varchar', length: 255})
   description: string;

   @Column({type: 'boolean'})
   done: boolean;
}