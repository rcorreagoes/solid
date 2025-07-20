import { Component, inject, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-s-single-responsability',
  imports: [],
  providers: [UserService, LoggerService],
  templateUrl: './s-single-responsability.html',
  styleUrl: './s-single-responsability.scss',
})
export class SSingleResponsability implements OnInit {
  private userService = inject(UserService);
  private logger = inject(LoggerService);

  user = {
    id: 0,
    name: '',
    email: '',
  };

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.logger.log(`Loaded user: ${this.user.name}`);
  }
}
