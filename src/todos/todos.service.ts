import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {

   findAll() {
      return 'this action returns all todos';
   }

   findById(id: string) {
      return `this action returns a #${id} todo`;
   }

   create() {
      return 'This action adds a new todo';
   }

   update(id: string) {
      return `This action updates a #${id} todo`;
   }

   delete(id: string) {
      return `This action removes a #${id} todo`;
   }

}