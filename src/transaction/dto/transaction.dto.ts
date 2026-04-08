import { WalletID } from '@/wallets/interfaces/wallet.interface';
import { CategoryID } from '@/category/interfaces/category.interface';
//dto/wallet.dto'

export enum TransactionType {
  Income,
  Expense,
}

export class CreateTransaction {
  amount: number;
  type: TransactionType;
  caegory: CategoryID;
  wallet: WalletID;
}
