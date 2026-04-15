import { WalletID } from '@/wallets/interfaces/wallet.interface';
import { CategoryID } from '@/category/interfaces/category.interface';

export enum TransactionType {
  Income,
  Expense,
}

export class CreateTransaction {
  amount: number;
  type: TransactionType;
  category: CategoryID;
  wallet: WalletID;
}
