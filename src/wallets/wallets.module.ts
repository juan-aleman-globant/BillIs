import { Module } from '@nestjs/common';
import { WalletsController } from './wallets.controller';
import { WalletsService } from './wallets.service';
import { WalletEntity } from './entities/Wallet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([WalletEntity])],
  controllers: [WalletsController],
  providers: [WalletsService],
})
export class WalletsModule {}
