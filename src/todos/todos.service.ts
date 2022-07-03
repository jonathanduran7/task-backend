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

   findById(id: string) {
      return `this action returns a #${id} todo`;
   }

   async create(body: CreateTodoDto): Promise<Todo> {
      const todo = this.todoRepository.create(body);
      return await this.todoRepository.save(todo);
   }

   update(id: string, body: UpdateTodoDto) {
      return `This action updates a #${id} todo`;
   }

   delete(id: string) {
      return `This action removes a #${id} todo`;
   }

}