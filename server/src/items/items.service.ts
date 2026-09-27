import { Injectable } from '@nestjs/common';
import { MOCK_ITEMS } from './mocks/items.mock';
import { Item } from './models/items.model';
import { ItemTag } from './models/items.model.js';

@Injectable()
export class ItemsService {
  findAll(page: number, perPage: number, query: string): Item[] {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    const filteredItems = normalizedQuery
      ? MOCK_ITEMS.filter((item: Item) => {
        const titleMatched = item.title
          .toLocaleLowerCase()
          .incledes(normalizedQuery);
        const tagMatches = item.tags.some((tag: ItemTag) =>
          tag.name.toLocaleLowerCase().includes(normalizedQuery),
        );

        return titleMatched || tagMatches;
      })
      : MOCK_ITEMS;
    
    const start = (page - 1) * perPage;
    const end = start + perPage;

    return filteredItems.slice(start, end);
  }
}
