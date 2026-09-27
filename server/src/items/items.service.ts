import { Injectable } from '@nestjs/common';
import { MOCK_ITEMS } from './mocks/items.mock.js';
import { Item } from './models/item.model.js';
import { ItemTag } from './models/item.model.js';

@Injectable()
export class ItemsService {
  findAll(page: number, perPage: number, query: string): Item[] {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    const filteredItems = normalizedQuery
      ? MOCK_ITEMS.filter((item: Item) => {
        const titleMatched = item.title
          .toLocaleLowerCase()
          .includes(normalizedQuery);
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
