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

@Module({
  imports: [WalletsModule, UserModule, CategoryModule],
  controllers: [AppController, CategoryController, UserController],
  providers: [AppService, CategoryService, UserService],
})
export class AppModule {}
