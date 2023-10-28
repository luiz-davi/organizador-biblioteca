import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { BookDto } from 'src/controllers/books/dto/books.dto';
import { BookRepository } from 'src/mongo/repository/book.repository';

@Injectable()
export class BooksService {

  constructor(
    private readonly bookRepository: BookRepository,
  ) { }

  async saveBook(newBook: BookDto): Promise<BookDto> {
    return await this.bookRepository.saveBook(newBook);
  }

  async getAllBooks(): Promise<Array<BookDto>> {
    return await this.bookRepository.allBooks();
  }

  async getBook(id: string): Promise<BookDto> {
    try {
      return await this.bookRepository.getBookById(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async deleteBook(id: string): Promise<boolean> {
    try {
      const result = await this.bookRepository.destroyBook(id);

      if (result.deletedCount === 0) {
        throw new NotFoundException('livro não encontrado');
      }

      return true;
    } catch (error) {
      throw new NotFoundException(error.message);
    }

  }

  async updateBook(id: string, updateBook: Partial<BookDto>): Promise<boolean> {
    try {
      await this.bookRepository.updateBook(id, updateBook);

      return true
    } catch (error) {
      throw new NotFoundException(error.message);
    }


  }

}
