import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTransaction } from './dto/transaction.dto';
import { TransactionService } from './transaction.service';
import { ITransaction } from './interfaces/transaction.interface';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post('newTransaction')
  async newTransaction(@Body() transaction: CreateTransaction) {
    await this.transactionService.newTransaction(transaction);
  }
  @Get('transactions')
  async getAllTransactions(): Promise<ITransaction[]> {
    return await this.transactionService.getAllTransactions();
  }

  // @Get('transactions/:')
}
