import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletsModule } from './wallets/wallets.module';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'cdg_password',
      username: 'cdg_user',
      entities: [],
      database: 'postgres',
      synchronize: true,
      logging: true,
    }),
    WalletsModule,
    UserModule,
    CategoryModule,
  ],
  controllers: [AppController, CategoryController, UserController],
  providers: [AppService, CategoryService, UserService],
})
export class AppModule {}
