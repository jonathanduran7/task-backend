import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './guards/local-auth.guards';

@Controller('auth')
export class AuthController {

   @UseGuards(LocalAuthGuard)
   @Post('login')
   login(@Req() req: any){
      return req.user
   }

   @Get('profile')
   profile(){
      return 'este es tu usuario'
   }
}
