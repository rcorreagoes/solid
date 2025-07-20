import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  getUser() {
    return {
      id: 1,
      name: 'João Silva',
      email: 'joao.silva@email.com',
    };
  }
}
