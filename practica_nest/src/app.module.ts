import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
 imports: [
 TypeOrmModule.forRoot({
 type: 'sqlite',
 database: 'proyecto-equipo.sqlite',
 entities: [__dirname + '/**/*.entity{.ts,.js}'],
 synchronize: true, // Solo desarrollo
 logging: true, // Para debug
 }),
 // Aquí se importarán los módulos de cada entidad
 ],
 controllers: [AppController],
 providers: [AppService],
})
export class AppModule {}