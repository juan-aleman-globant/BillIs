import { Injectable } from '@nestjs/common';
import { CreateTransaction } from './dto/transaction.dto';
import { ITransaction } from './interfaces/transaction.interface';

const transactions: ITransaction[] = [];

@Injectable()
export class TransactionService {
  public newTransaction(newTransaction: CreateTransaction) {
    /**
     * Persists on db
     * Check:
     *    - transaction balance is enough if it is an Expense
     *    - wallets type equal
     *    - DB Transactions in order to can regret the opertion
     */

    return transactions.push({
      transactionID: Math.random().toString(36).substring(7),
      ...newTransaction,
      status: 'succes',
      failingError: 'Not enough money',
    });
  }
}
