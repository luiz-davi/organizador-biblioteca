import { Body, Controller, Delete, Get, Patch, Post, Param } from '@nestjs/common';
import { BookDto } from './dto/books.dto';
import { BooksService } from 'src/services/books/books.service';

@Controller('books')
export class BooksController {

  constructor(private readonly bookService: BooksService) { }

  @Get()
  async getAllBooks(): Promise<Array<BookDto>> {
    return await this.bookService.getAllBooks();
  }

  @Post()
  async createBook(@Body() newBook: BookDto): Promise<BookDto> {
    return await this.bookService.saveBook(newBook);
  }

  @Get(':id')
  async getBook(@Param('id') id: string): Promise<BookDto> {
    return await this.bookService.getBook(id);
  }

  @Patch(':id')
  async updateBook(
    @Param('id') id: string,
    @Body() updateBook: Partial<BookDto>
  ): Promise<boolean> {
    return await this.bookService.updateBook(id, updateBook);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string): Promise<boolean> {
    return this.bookService.deleteBook(id);
  }

  @Get('teste/list')
  async teste(): Promise<any> {
    if (process.env.NODE_ENV === 'development') {
      return await 'Here moda foca';
    } else {
      return await 'Oi cabeça de boi';
    }
  }

}
