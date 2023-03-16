import { Module } from '@nestjs/common'
import { MailService } from './mail.service'
import { MailController } from './mail.controller'
import { MailerModule } from '@nestjs-modules/mailer'

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.mail.ru',
        secure: true,
        port: 465,
        auth: {
          user: 'noreply@preax.ru',
          pass: '5zsK9LGVBqjPpjRgbcue'
        }
      },
      defaults: {
        from: `"No Reply" <noreply@preax.ru>`
      }
    })
  ],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService]
})
export class MailModule {}
