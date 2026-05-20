import { Injectable } from '@nestjs/common';
import { CreateTransaction } from './dto/transaction.dto';
import {
  ITransaction,
  TransactionID,
} from './interfaces/transaction.interface';
import { TransactionEntity } from '@/transaction/entities/Transaction.entity';
import { Repository } from 'typeorm';

// const transactions: ITransaction[] = [];

@Injectable()
export class TransactionService {
  constructor(
    private readonly transactionRepository: Repository<TransactionEntity>,
  ) {}
  async newTransaction(transaction: CreateTransaction) {
    /**
     * Persists on db
     * Check:
     *    - transaction balance is enough if it is an Expense
     *    - wallets type equal
     *    - DB Transactions in order to can regret the opertion
     */

    // return transactions.push({
    //   transactionID: Math.random().toString(36).substring(7),
    //   ...newTransaction,
    //   status: 'succes',
    //   failingError: 'Not enough money',
    // });
    const newTransaction = await this.transactionRepository.save(transaction);
    return newTransaction;
  }

  async getAllTransactions() {
    return await this.transactionRepository.find();
  }

  async getTransaction(
    transactionId: TransactionID,
  ): Promise<ITransaction | null> {
    return await this.transactionRepository.findOne({
      where: { transactionID: transactionId },
    });
  }
}
