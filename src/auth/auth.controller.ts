import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
   @Post('login')
   login(@Body() body){
      return body
   }

   @Get('profile')
   profile(){
      return 'este es tu usuario'
   }
}
