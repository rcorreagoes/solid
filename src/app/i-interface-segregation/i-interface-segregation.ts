import { Component } from '@angular/core';
import { MultiFunctionPrinter, Printer, SimplePrinter } from './devices';

@Component({
  selector: 'app-i-interface-segregation',
  imports: [],
  templateUrl: './i-interface-segregation.html',
  styleUrl: './i-interface-segregation.scss',
})
export class IInterfaceSegregation {
  printer: Printer = new SimplePrinter();
  mfp: MultiFunctionPrinter = new MultiFunctionPrinter();

  printMessage = this.printer.print();
  scanMessage = this.mfp.scan();
}
