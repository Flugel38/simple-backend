import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Calculation } from './calculation.entity';

@Injectable()
export class CalculationsService {
  constructor(
    @InjectRepository(Calculation)
    private readonly calcRepo: Repository<Calculation>,
  ) {}

  create(expression: string, result: string) {
    const newCalc = this.calcRepo.create({ expression, result });
    return this.calcRepo.save(newCalc);
  }

  findAll() {
    return this.calcRepo.find({ order: { createdAt: 'DESC' } });
  }

  findOne(id: number) {
    return this.calcRepo.findOneBy({ id });
  }

  update(id: number, data: Partial<Calculation>) {
    return this.calcRepo.update(id, data);
  }

  delete(id: number) {
    return this.calcRepo.delete(id);
  }
}
