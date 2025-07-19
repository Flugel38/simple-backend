import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CalculationsService } from './calculations.service';

@Controller('calculations')
export class CalculationsController {
  constructor(private readonly calcService: CalculationsService) {}

  @Post()
  create(@Body() body: { expression: string; result: string }) {
    return this.calcService.create(body.expression, body.result);
  }

  @Get()
  findAll() {
    return this.calcService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calcService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: Partial<{ expression: string; result: string }>,
  ) {
    return this.calcService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.calcService.delete(+id);
  }
}
