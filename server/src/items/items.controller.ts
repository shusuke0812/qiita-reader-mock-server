import { Controller, Get, Query } from '@nestjs/common';
import { Item } from './models/items.model';
import { ItemsService } from './items.service.js';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  getItems(
    @Query('page') page = '1',
    @Query('per_page') perPage = '20',
    @Query('query') query = '',
  ) : Item[] {
    return this.itemsService.findAll(
      Number(page),
      Number(perPage),
      query
    )
  }
}
