import { Component } from '@angular/core';
import { ExamenService } from '../examen.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  randomQuote: any;
  constructor(private examenService: ExamenService){}

  ngOnInit() {
    this.examenService.getQuote().subscribe((data) => {
      this.randomQuote = data;
    });
  }
}
