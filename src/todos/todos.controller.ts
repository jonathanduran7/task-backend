import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateTodoDto } from './dto/CreateTodoDto';
import { UpdateTodoDto } from './dto/UpdateTodoDto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {

   constructor(private todosService: TodosService) {}

   @Get('/')
   getTodos() {
      return this.todosService.findAll()
   }

   @Get('/:id')
   async getTodoById(@Param('id',ParseIntPipe) id: number) {
      return this.todosService.findById(id)
   }

   @Post('/')
   createTodo(@Body() body: CreateTodoDto){
      return this.todosService.create(body)
   }

   @Put('/:id')
   async updateTodo(@Param('id',ParseIntPipe) id: number, @Body() body: UpdateTodoDto) {
      return this.todosService.update(id,body)
   }

   @Delete('/:id')
   deleteTodo(@Param('id', ParseIntPipe) id: number) {
      return this.todosService.delete(id)
   }
}
