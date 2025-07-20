export interface Shape {
  getArea(): number;
}

export class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}

  getArea(): number {
    return this.width * this.height;
  }
}

export class Square implements Shape {
  constructor(public side: number) {}

  getArea(): number {
    return this.side * this.side;
  }
}
