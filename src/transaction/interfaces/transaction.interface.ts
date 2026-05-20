import { TransactionType } from '@/transaction/dto/transaction.dto';
import { CategoryID } from '@/category/interfaces/category.interface';
import { WalletID } from '@/wallets/interfaces/wallet.interface';

export type TransactionID = string;
export type TransactionStatus = 'succes' | 'failed';

export interface ITransaction {
  transactionID: TransactionID;
  amount: number;
  type: TransactionType;
  category: CategoryID;
  wallet: WalletID;
  status?: TransactionStatus;
  failingError?: string;
}
