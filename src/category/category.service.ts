import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';

import { ICategory } from './interfaces/category.interface';

@Injectable()
export class CategoryService {
  private categories: ICategory[] = [];

  findAll(): ICategory[] {
    return this.categories;
  }

  findOne(id: string): ICategory {
    const category = this.categories.find((c) => c.id === id);
    if (!category) throw new NotFoundException(`Category ${id} not found`);
    return category;
  }

  create(dto: CreateCategoryDto): ICategory {
    const newCategory: ICategory = {
      id: Math.random().toString(36).substring(7),
      ...dto,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: string, dto: UpdateCategoryDto): ICategory {
    const index = this.categories.findIndex((c) => c.id === id);
    if (index === -1) throw new NotFoundException(`Category ${id} not found`);

    this.categories[index] = {
      ...this.categories[index],
      ...dto,
    };
    return this.categories[index];
  }

  remove(id: string): void {
    const index = this.categories.findIndex((c) => c.id === id);
    if (index === -1) throw new NotFoundException(`Category ${id} not found`);
    this.categories.splice(index, 1);
  }
}
