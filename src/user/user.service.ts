import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {

   constructor(
      @InjectRepository(UserEntity)
      private readonly userRepository: Repository<UserEntity>
   ){}

   async getMany(){
      return await this.userRepository.find()
   }

   async getOne(id: number){
      const user = await this.userRepository.findOneBy({id})

      if(!user) return {msg: 'there are not users'}

      return user
   }
}
