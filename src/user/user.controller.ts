import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
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

}
