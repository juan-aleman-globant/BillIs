import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { type IWallet, type WalletID } from './interfaces/wallet.interface';
import { WalletsService } from './wallets.service';
import { CreateWalletDto, UpdateWalletDto } from './dto/wallet.dto';

@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletService: WalletsService) {}
  @Get('getAllWallets')
  getAllWallets(): Promise<IWallet[]> {
    return this.walletService.getAllWallets();
  }

  @Post('wallets')
  newWallet(@Body() createWalletDto: CreateWalletDto): Promise<IWallet> {
    return this.walletService.createNewWallet(createWalletDto);
  }

  @Get(':walletId')
  getWallet(@Param('walletId') walletId: string): Promise<IWallet> {
    return this.walletService.getWallet(walletId);
  }

  @Patch(':walletId')
  updateWallet(
    @Param('walletId') walletId: WalletID,
    @Body() updateDto: UpdateWalletDto,
  ): Promise<IWallet> {
    return this.walletService.updateWallet(walletId, updateDto);
  }

  @Delete()
  deleteWallet(@Param('walletId') walletId: WalletID) {
    return this.walletService.deleteWallet(walletId);
  }
}
