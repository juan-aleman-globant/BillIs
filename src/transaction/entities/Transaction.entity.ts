import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { type TransactionType } from '@/transaction/dto/transaction.dto';
import { type CategoryID } from '@/category/interfaces/category.interface';
import { type WalletID } from '@/wallets/interfaces/wallet.interface';
import {
  type TransactionID,
  type TransactionStatus,
} from '@/transaction/interfaces/transaction.interface';

@Entity()
export class TransactionEntity {
  @PrimaryGeneratedColumn()
  transactionID: TransactionID;

  @Column()
  amount: number;

  @Column()
  type: TransactionType;

  @Column()
  category: CategoryID;

  @Column()
  wallet: WalletID;

  @Column()
  status?: TransactionStatus;

  @Column()
  failingError?: string;
}
