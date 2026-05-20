import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletsModule } from './wallets/wallets.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/User.entity';
import { CategoryEntity } from './category/entities/Category.entity';
import { WalletEntity } from './wallets/entities/Wallet.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'cdg_password',
      username: 'cdg_user',
      entities: [UserEntity, CategoryEntity, WalletEntity],
      database: 'postgres',
      synchronize: true,
      logging: true,
    }),
    WalletsModule,
    UserModule,
    CategoryModule,
  ],
  controllers: [AppController], // no es necesario si los importo en imports por que ya lo hago desde los modulos
  providers: [AppService],
})
export class AppModule {}
