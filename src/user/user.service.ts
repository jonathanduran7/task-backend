import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { EditUserDto } from './dtos/edit-user.dto';
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

   async createOne(dto: CreateUserDto ){

      const userExist = this.userRepository.findOneBy({email: dto.email})

      if(userExist) return {msg: 'user already exists'}

      const newUser = this.userRepository.create(dto)
      await this.userRepository.save(newUser)
      return {msg: 'user created'}
   }

   async editOne(dto: EditUserDto, id: number){
      const user = await this.userRepository.findOneBy({id})

      if(!user) return {msg: 'user dont exist'}

      const userExist = await this.userRepository.findOneBy({email: dto.email})

      if(userExist) return {msg: 'email already exists'}

      await this.userRepository.update({id}, dto)
      return {
         msg: 'User update'
      }
   }

   async deleteOne(id: number){
      const user = await this.userRepository.findOneBy({id})

      if(!user) return {msg: 'user dont exist'}

      await this.userRepository.delete({id})
      return {
         msg: 'user deleted'
      }
   }

   async findOne(email: string){
      return await this.userRepository
         .createQueryBuilder('user')
         .where({email})
         .addSelect('user.password')
         .getOne()
   }
}
