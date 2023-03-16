import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer'

@Injectable()
export class AppService {
  constructor(private mailerService: MailerService) {}

  async sendActivationMail(email: string, token: string) {
    const url = `example.com/auth/confirm?token=${token}`

    return await this.mailerService.sendMail({
      to: email,
      subject: 'Welcome to PREAX App! Confirm your Email',
      context: {
        name: 'ffewgrwe',
        url
      }
    })
  }
}
