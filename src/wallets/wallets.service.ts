import { Injectable, NotFoundException } from '@nestjs/common';
import { IWallet, Currency, WalletID } from './interfaces/wallet.interface';
import { CreateWalletDto, UpdateWalletDto } from './dto/wallet.dto';
import { WalletEntity } from './entities/Wallet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// const wallets: IWallet[] = [];

@Injectable()
export class WalletsService {
  constructor(
    @InjectRepository(WalletEntity)
    private readonly walletRepository: Repository<WalletEntity>,
  ) {}
  async getAllWallets(): Promise<IWallet[]> {
    const allWallets = await this.walletRepository.find();
    return allWallets;
    // return [
    //   ...wallets,
    //   {
    //     walletId: 'algo',
    //     name: 'alguna billetera',
    //     balance: 500,
    //     currency: 1,
    //     userOwner: 'Michael J. Fox',
    //   },
    // ];
  }

  async createNewWallet(createWalletDto: CreateWalletDto): Promise<IWallet> {
    const newWallet = await this.walletRepository.save(createWalletDto);
    return newWallet;
    // const newWallet: IWallet = {
    //   ...createWalletDto,
    //   walletId: Math.random().toString(36).substring(7),
    // };
    // wallets.unshift(newWallet);
    // return newWallet;
  }

  async getWallet(walletID: WalletID): Promise<IWallet> {
    const wallet = await this.walletRepository.findOne({
      where: { walletId: walletID },
    });
    if (!wallet)
      throw new NotFoundException(
        `There is no such wallet with the id: ${walletID}`,
      );
    return wallet;
    // const wallet = wallets.find((wallet) => wallet.walletId === walletID);
    // if (!wallet)
    //   throw new NotFoundException(
    //     `There is no such wallet with the id: ${walletID}`,
    //   );
    // return wallet;
  }

  private async checkIfExists(walletId: WalletID): Promise<boolean> {
    const exists = await this.walletRepository.existsBy({ walletId: walletId });
    return exists;
  }

  async updateWallet(
    walletID: WalletID,
    updatedWalletDto: UpdateWalletDto,
  ): Promise<IWallet> {
    const entity = await this.walletRepository.preload({
      walletId: walletID,
      ...updatedWalletDto,
    });
    if (!entity) {
      throw new NotFoundException(
        `There is no such wallet with the id: ${walletID}`,
      );
    }
    const walletToUpdate = await this.walletRepository.save(entity);
    return walletToUpdate;
    // let walletToUpdate: IWallet | undefined = wallets.find(
    //   (wallet) => wallet.walletId === walletID,
    // );
    // if (!walletToUpdate) {
    //   throw new NotFoundException(
    //     `There is no such wallet with the id: ${walletID}`,
    //   );
    // }
    // walletToUpdate = {
    //   ...walletToUpdate,
    //   ...updatedWallet,
    // };
    // return walletToUpdate;
  }

  async deleteWallet(walletID: WalletID): Promise<void> {
    const exists: boolean = await this.checkIfExists(walletID);
    if (!exists) {
      throw new NotFoundException(
        `There is no such wallet with the id: ${walletID}`,
      );
    }
    await this.walletRepository.delete({
      walletId: walletID,
    });
    // if (deletedWallet.affected === 0) {
    //   throw new NotFoundException(`User with ID ${walletID} not found`);
    // }
  }

  async getBalance(walletID: WalletID): Promise<number> {
    const exists: boolean = await this.checkIfExists(walletID);
    if (!exists) {
      throw new NotFoundException(
        `There is no such wallet with the id: ${walletID}`,
      );
    }
    const wallet = await this.getWallet(walletID);
    return wallet.balance;
  }

  async getWalletType(walletID: WalletID): Promise<Currency> {
    const exists: boolean = await this.checkIfExists(walletID);
    if (!exists) {
      throw new NotFoundException(
        `There is no such wallet with the id: ${walletID}`,
      );
    }
    const wallet = await this.getWallet(walletID);
    return wallet.currency;
  }

  async getOwner(walletID: WalletID): Promise<string> {
    const exists: boolean = await this.checkIfExists(walletID);
    if (!exists) {
      throw new NotFoundException(
        `There is no such wallet with the id: ${walletID}`,
      );
    }
    const wallet = await this.getWallet(walletID);
    return wallet.userOwner;
  }
}
