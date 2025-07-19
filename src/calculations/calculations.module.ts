import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Calculation } from './calculation.entity';
import { CalculationsController } from './calculations.controller';
import { CalculationsService } from './calculations.service';

@Module({
  imports: [TypeOrmModule.forFeature([Calculation])],
  controllers: [CalculationsController],
  providers: [CalculationsService],
})
export class CalculationsModule {}
