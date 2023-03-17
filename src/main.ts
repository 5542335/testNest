import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

const start = async () => {
  try {
    const PORT = 5001
    const app = await NestFactory.create(AppModule, {
      cors: {
        origin: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        credentials: true,
        maxAge: 3600
      }
    })
    app.useGlobalPipes(new ValidationPipe())
    app.setGlobalPrefix('api')


    await app.listen(PORT, () =>
      console.log(`Server has been started on PORT ${PORT}`)
    )
  } catch (e) {
    console.log(e)
  }
}

start()

