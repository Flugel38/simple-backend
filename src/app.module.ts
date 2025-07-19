import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculationsModule } from './calculations/calculations.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'nozomi.proxy.rlwy.net',
      port: 57432,
      username: 'postgres',
      password: 'JQTnKvODcwkJvFsfhQqXZZXkhxUMSdHh',
      database: 'railway',
      synchronize: false,
      autoLoadEntities: true,
    }),
    CalculationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
