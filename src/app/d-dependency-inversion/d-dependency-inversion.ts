import { Component } from '@angular/core';
import { EmailService, MessageService, SMSService } from './services';

@Component({
  selector: 'app-d-dependency-inversion',
  imports: [],
  templateUrl: './d-dependency-inversion.html',
  styleUrl: './d-dependency-inversion.scss',
})
export class DDependencyInversion {
  message = 'Projeto SOLID concluído!';

  emailService: MessageService = new EmailService();
  smsService: MessageService = new SMSService();

  emailResult = this.emailService.sendMessage(this.message);
  smsResult = this.smsService.sendMessage(this.message);
}
