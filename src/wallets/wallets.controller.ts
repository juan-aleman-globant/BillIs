import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { type IWallet } from './interfaces/wallet.interface';
import { WalletsService } from './wallets.service';
import {
  CreateWalletDto,
  type WalletId,
  UpdateWalletDto,
} from './dto/wallet.dto';

@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletService: WalletsService) {}
  @Get('getAllWallets')
  getAllWallets(): IWallet[] {
    return this.walletService.getAllWallets();
  }

  @Post('wallets')
  newWallet(@Body() createWalletDto: CreateWalletDto): IWallet {
    return this.walletService.createNewWallet(createWalletDto);
  }

  @Get(':walletId')
  getWallet(@Param('walletId') walletId: string): IWallet {
    return this.walletService.getWallet(walletId);
  }

  @Patch(':walletId')
  updateWallet(
    @Param('walletId') walletId: WalletId,
    @Body() updateDto: UpdateWalletDto,
  ): IWallet {
    return this.walletService.updateWallet(walletId, updateDto);
  }

  @Delete()
  deleteWallet(@Param('walletId') walletId: WalletId) {
    return this.walletService.deleteWallet(walletId);
  }
}
