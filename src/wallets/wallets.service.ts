import { Injectable, NotFoundException } from '@nestjs/common';
import { IWallet, Currency, WalletID } from './interfaces/wallet.interface';
import { CreateWalletDto, UpdateWalletDto } from './dto/wallet.dto';

const wallets: IWallet[] = [];

@Injectable()
export class WalletsService {
  // private wallets: IWallet[];
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
      id: 'fakeID1',
      currency: Currency.USD,
      userOwner: 'owner1',
    }; // For now we are faking data and using an array
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
    const walletBalance: number = wallets[id].balance;
    return wallets[id].balance;
  }
}
