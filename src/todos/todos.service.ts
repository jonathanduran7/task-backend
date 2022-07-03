import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTodoDto } from './dto/CreateTodoDto';
import { UpdateTodoDto } from './dto/UpdateTodoDto';
import { Todo } from './entities/todos.entity';

@Injectable()
export class TodosService {

   constructor(
      @InjectRepository(Todo)
      private readonly todoRepository: Repository<Todo>
   ){}

   async findAll(): Promise<Todo[]> {
      return this.todoRepository.find()
   }

   async findById(id: number) {
      return await this.todoRepository.findBy({id})
   }

   async create(body: CreateTodoDto): Promise<Todo> {
      const todo = this.todoRepository.create(body);
      return await this.todoRepository.save(todo);
   }

   update(id: string, body: UpdateTodoDto) {
      return `This action updates a #${id} todo`;
   }

   async delete(id: number) {
      const todo = await this.todoRepository.findBy({id})

      if(!todo.length) return {msg: 'No existe todo con el id'}

      await this.todoRepository.delete({id})
      return {
         msg: 'Todo eliminado'
      }
   }

}