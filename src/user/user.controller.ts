import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { EditUserDto } from './dtos/edit-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

   constructor(
      private readonly userService: UserService
   ){}

   @Get(':id')
   getOne(@Param('id',ParseIntPipe) id: number){
      return this.userService.getOne(id)
   }

   @Get()
   getMany(){
      return this.userService.getMany()
   }

   @Post()
   async createOne(@Body() dto: CreateUserDto){
      return await this.userService.createOne(dto)
   }

   @Put(':id')
   async editOne(@Param('id', ParseIntPipe) id: number, @Body() dto: EditUserDto){
      return await this.userService.editOne(dto,id)
   }

   @Delete(':id')
   async deleteOne(@Param('id', ParseIntPipe) id:number){
      return await this.userService.deleteOne(id)
   }
}
