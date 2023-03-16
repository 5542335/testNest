import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

const start = async () => {
  try {
    const PORT = 5000
    const app = await NestFactory.create(AppModule)
    app.use(cookieParser())
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

