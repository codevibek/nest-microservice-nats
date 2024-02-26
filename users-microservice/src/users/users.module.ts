import { Module } from '@nestjs/common';
import { UserMicroserviceController } from './users.controller';
import { userService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserMicroserviceController],
  providers: [userService],
})
export class UserModule {}
