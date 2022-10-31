import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('QUIZ MANAGER')
    .setDescription('QUIZ MANAGEMENT SYSTEM')
    .setVersion('1.0')
    .addTag('QUIZ')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger-ui.html', app, document);
  await app.listen(3000);
}
bootstrap();
