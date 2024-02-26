import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3307,
      database: 'nestjs_db',
      entities: [User],
      synchronize: true,
      username: 'testuser',
      password: 'password',
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
