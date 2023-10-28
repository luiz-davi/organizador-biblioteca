import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books/books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksService } from './services/books/books.service';
import { BookRepository } from './mongo/repository/book.repository';
import { BookSchema } from './mongo/schemas/book.schema';
require('dotenv').config();

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_CONNECTION,
      { dbName: 'books_db' },
    ),
    MongooseModule.forFeature([{ name: 'book', schema: BookSchema }]),
  ],
  controllers: [BooksController],
  providers: [BooksService, BookRepository],
})
export class AppModule { }
