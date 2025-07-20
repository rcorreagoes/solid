import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Rectangle, Shape, Square } from './shape';

@Component({
  standalone: true,
  selector: 'app-l-liskov-substitution',
  imports: [CommonModule],
  templateUrl: './l-liskov-substitution.html',
  styleUrl: './l-liskov-substitution.scss',
})
export class LLiskovSubstitution {
  shapes: Shape[] = [
    new Rectangle(4, 5),
    new Square(6),
    new Rectangle(3, 3),
    new Square(2),
  ];
}
