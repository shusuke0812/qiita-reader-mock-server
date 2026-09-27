import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { ItemsModule } from './items/items.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ItemsModule,
  ],
})
export class AppModule {}
