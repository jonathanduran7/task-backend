import { Controller, Delete, Get, Param, Put } from '@nestjs/common';

@Controller('todos')
export class TodosController {
   @Get('/')
   getTodos() {
      return 'This action returns all todos';
   }

   @Get('/:id')
   getTodoById(@Param('id') id: string) {
      return `This action returns a #${id} todo`;
   }

   @Put('/:id')
   updateTodo(@Param('id') id: string) {
      return `This action updates a #${id} todo`;
   }

   @Delete('/:id')
   deleteTodo(@Param('id') id: string) {
      return `This action removes a #${id} todo`;
   }
}
