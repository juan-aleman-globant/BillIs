import { Injectable } from '@nestjs/common';
import { CreateTransaction } from './dto/transaction.dto';
import { ITransaction } from './interfaces/transaction.interface';

const transactions: ITransaction[] = [];

@Injectable()
export class TransactionService {
  // private transactions: ITransaction[] = [];

  public newTransaction(newTransaction: CreateTransaction) {
    return transactions.push({
      transactionID: Math.random().toString(36).substring(7),
      ...newTransaction,
      status: 'succes',
      failingError: 'Not enough money',
    });
    /**
     * Persists on db
     * Check:
     *    - transaction balance is enough if it is an Expense
     *    - wallet type equal
     *    - 
     */
  }
}

/**
 * Chequear tipo de moneda
 * Si es de salida hay suficiente saldo?
 * Puede no haber categoria
 * 
 * 
 *   transactionID: TransactionID;
   amount: number;
   type: TransactionType;
   caegory: CategoryID;
   wallet: WalletID;
   status: TransactionStatus;
   failingError: string;
 * 
 */
