import { Injectable, NotFoundException } from '@nestjs/common';
import { IWallet, Currency, WalletID } from './interfaces/wallet.interface';
import { CreateWalletDto, UpdateWalletDto } from './dto/wallet.dto';

const wallets: IWallet[] = [];

@Injectable()
export class WalletsService {
  getAllWallets(): IWallet[] {
    return [
      ...wallets,
      {
        id: 'algo',
        name: 'alguna billetera',
        balance: 500,
        currency: 1,
        userOwner: 'Michael J. Fox',
      },
    ];
  }

  createNewWallet(createWalletDto: CreateWalletDto): IWallet {
    const newWallet: IWallet = {
      ...createWalletDto,
      id: Math.random().toString(36).substring(7),
    };
    wallets.unshift(newWallet);
    return newWallet;
  }

  getWallet(walletID: WalletID): IWallet {
    const wallet = wallets.find((wallet) => wallet.id === walletID);
    if (!wallet)
      throw new NotFoundException(
        `There is no such wallet with the id: ${walletID}`,
      );
    return wallet;
  }

  updateWallet(walletID: WalletID, updatedWallet: UpdateWalletDto): IWallet {
    let walletToUpdate: IWallet | undefined = wallets.find(
      (wallet) => wallet.id === walletID,
    );
    if (!walletToUpdate) {
      throw new NotFoundException(
        `There is no such wallet with the id: ${walletID}`,
      );
    }
    walletToUpdate = {
      ...walletToUpdate,
      ...updatedWallet,
    };
    return walletToUpdate;
  }

  deleteWallet(walletID: WalletID): IWallet {
    const walletIndexToDel: number | undefined = wallets.findIndex(
      (wallet) => wallet.id === walletID,
    );
    if (!walletID) {
      throw new NotFoundException(
        `There is no such wallet with the id: ${walletID}`,
      );
    }
    wallets.splice(walletIndexToDel, 1);
    return wallets[walletIndexToDel];
  }

  getBalance(id: WalletID): number {
    const wallet = wallets.find((wallet) => wallet.id === id);
    if (!wallet) {
      throw new NotFoundException(`There is no such wallet with the id: ${id}`);
    }
    return wallet.balance;
  }

  getWalletType(id: WalletID): Currency {
    const wallet = wallets.find((wallet) => wallet.id === id);
    if (!wallet) {
      throw new NotFoundException(`There is no such wallet with the id: ${id}`);
    }
    return wallet.currency;
  }

  getOwner(id: WalletID): string {
    const wallet = wallets.find((wallet) => wallet.id === id);
    if (!wallet) {
      throw new NotFoundException(`There is no such wallet with the id: ${id}`);
    }
    return wallet.userOwner;
  }
}
