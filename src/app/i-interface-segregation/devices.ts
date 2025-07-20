export interface Printer {
  print(): string;
}

export interface Scanner {
  scan(): string;
}

export class SimplePrinter implements Printer {
  print(): string {
    return 'Imprimindo documento com a impressora simples.';
  }
}

export class MultiFunctionPrinter implements Printer, Scanner {
  print(): string {
    return 'Imprimindo com a multifuncional.';
  }

  scan(): string {
    return 'Escaneando com a multifuncional.';
  }
}
