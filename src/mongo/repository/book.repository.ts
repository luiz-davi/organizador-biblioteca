import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookDto } from 'src/controllers/books/dto/books.dto';
import { IBook } from '../interfaces/book.interface';

@Injectable()
export class BookRepository {

  constructor(
    @InjectModel('book') private readonly bookModel: Model<IBook>
  ) { }

  async saveBook(newBook: BookDto): Promise<any> {
    const savedBook = new this.bookModel(newBook);
    return await savedBook.save();
  }

  async allBooks(): Promise<Array<BookDto>> {
    return await this.bookModel.find({}, { __v: false });
  }

  async getBookById(id: string): Promise<BookDto> {
    return await this.bookModel.findById(id);
  }

  async destroyBook(id: string): Promise<any> {
    return await this.bookModel.deleteOne({ _id: id });
  }

  async updateBook(_id: string, updateParams: Partial<BookDto>): Promise<any> {
    return await this.bookModel.findOneAndUpdate({ _id }, updateParams)
  }

}