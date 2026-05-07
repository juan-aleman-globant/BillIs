import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';
import { ICategory } from './interfaces/category.interface';
import { CategoryEntity } from './entities/Category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  // private categories: ICategory[] = [];
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async create(dto: CreateCategoryDto): Promise<ICategory> {
    const newCategory = await this.categoryRepository.save(dto);
    // const newCategory: ICategory = {
    //   categoryId: Math.random().toString(36).substring(7),
    //   ...dto,
    // };
    // this.categories.push(newCategory);
    return newCategory;
  }

  async findAll(): Promise<ICategory[]> {
    return await this.categoryRepository.find();
    // return this.categories;
  }

  async findOne(id: string): Promise<ICategory> {
    const category = await this.categoryRepository.findOne({
      where: { categoryId: id },
    });
    // const category = this.categories.find((c) => c.categoryId === id);
    if (!category) throw new NotFoundException(`Category ${id} not found`);
    return category;
  }

  async update(id: string, dto: UpdateCategoryDto): Promise<void> {
    const updateCategory = await this.categoryRepository.update(
      { categoryId: id },
      dto,
    );
    if (updateCategory.affected === 0) {
      throw new NotFoundException(`Category ${id} not found`);
    }
    // const index = this.categories.findIndex((c) => c.categoryId === id);
    // if (index === -1) throw new NotFoundException(`Category ${id} not found`);

    // this.categories[index] = {
    //   ...this.categories[index],
    //   ...dto,
    // };
    // return this.categories[index];
  }

  async remove(id: string): Promise<void> {
    const deletedCategory = await this.categoryRepository.delete({
      categoryId: id,
    });
    if (deletedCategory.affected === 0) {
      throw new NotFoundException(`Category ${id} not found`);
    }
    // const index = this.categories.findIndex((c) => c.categoryId === id);
    // if (index === -1) throw new NotFoundException(`Category ${id} not found`);
    // this.categories.splice(index, 1);
  }
}
