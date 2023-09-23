// src/items/items.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
  ) {}

  findAll(): Promise<Item[]> {
    return this.itemsRepository.find();
  }

  findOne(id: number): Promise<any> {
    return this.itemsRepository.findOne({ where: { id: id } });
  }

  async create(item: Item): Promise<Item> {
    return await this.itemsRepository.save(item);
  }

  async update(id: number, item: Item): Promise<Item | null> {
    await this.itemsRepository.update(id, item);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.itemsRepository.delete(id);
  }
}
