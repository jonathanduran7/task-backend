import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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
   getTodoById(@Param('id') id: string) {
      return this.todosService.findById(id)
   }

   @Post('/')
   createTodo(@Body() body: CreateTodoDto){
      return this.todosService.create(body)
   }

   @Put('/:id')
   updateTodo(@Param('id') id: string, @Body() body: UpdateTodoDto) {
      console.log(body)
      return this.todosService.update(id,body)
   }

   @Delete('/:id')
   deleteTodo(@Param('id') id: string) {
      return this.todosService.delete(id)
   }
}
