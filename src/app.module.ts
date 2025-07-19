import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//postgres:JQTnKvODcwkJvFsfhQqXZZXkhxUMSdHh@nozomi.proxy.rlwy.net:57432/railway

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'nozomi.proxy.rlwy.net', // e.g., 'my-db.up.railway.app'
      port: 57432, // replace if Railway gives different port
      username: 'postgres',
      password: 'JQTnKvODcwkJvFsfhQqXZZXkhxUMSdHh',
      database: 'railway',
      synchronize: false,
      autoLoadEntities: true,
    }),
  ],
})
export class AppModule {}
