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
      todoRepository: Repository<Todo>
   ){}

   findAll() {
      return 'this action returns all todos';
   }

   findById(id: string) {
      return `this action returns a #${id} todo`;
   }

   create(body: CreateTodoDto) {
      console.log(body)
      return 'This action adds a new todo';
   }

   update(id: string, body: UpdateTodoDto) {
      return `This action updates a #${id} todo`;
   }

   delete(id: string) {
      return `This action removes a #${id} todo`;
   }

}