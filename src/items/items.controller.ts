// src/items/items.controller.ts

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.entity';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() item: Item): Promise<Item> {
    return this.itemsService.create(item);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() item: Item): Promise<Item> {
    return this.itemsService.update(id, item);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.itemsService.delete(id);
  }
}
