export interface MessageService {
  sendMessage(message: string): string;
}

export class EmailService implements MessageService {
  sendMessage(message: string): string {
    return `📧 Enviando e-mail: ${message}`;
  }
}

export class SMSService implements MessageService {
  sendMessage(message: string): string {
    return `📱 Enviando SMS: ${message}`;
  }
}
