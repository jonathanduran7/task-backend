import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {

   constructor(private todosService: TodosService) {}

   @Get('/')
   getTodos() {
      return this.todosService.findAll()
   }

   @Get('/:id')
   getTodoById(@Param('id') id: string) {
      return this.todosService.findById(id)
   }

   @Post('/')
   createTodo() {
      return this.todosService.create()
   }

   @Put('/:id')
   updateTodo(@Param('id') id: string) {
      return this.todosService.update(id)
   }

   @Delete('/:id')
   deleteTodo(@Param('id') id: string) {
      return this.todosService.delete(id)
   }
}
