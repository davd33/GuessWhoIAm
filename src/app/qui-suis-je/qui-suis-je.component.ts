import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-qui-suis-je',
  templateUrl: './qui-suis-je.component.html',
  styleUrls: ['./qui-suis-je.component.scss']
})
export class QuiSuisJeComponent implements OnInit {

  answers: any[];
  answer: any;
  imageSource: string;
  success = false;
  notPlayedYet = true;

  constructor() {
  }

  ngOnInit() {
    this.answers = [
      {
        name: 'Aucune idée !',
        files: ['CKoi']
      },
      {
        name: 'Une fleur.',
        files: ['Fleur']
      },
      {
        name: 'L\'escargot.',
        files: ['Escargot']
      },
      {
        name: 'L\'araignée curieuse.',
        files: ['Curieuse1', 'Curieuse2', 'Curieuse3']
      },
      {
        name: 'Le museau de Métis',
        files: ['Metis']
      },
      {
        name: 'Zizi la chatte.',
        files: ['Zizi']
      },
      {
        name: 'Mini araignée du jardin.',
        files: ['ToutePetite']
      }
    ];
    this.pickAnswer();
    this.setImageSource();
  }

  itsLoaded() {
  }

  tryAnswer(answer: any) {
    this.notPlayedYet = false;

    if (answer.name === this.answer.name) {
      this.success = true;
    }
  }

  setImageSource() {
    this.imageSource = '/src/app/img/' + this.randomArrayItem(this.answer.files) + '.jpg';
  }

  reload() {
    this.notPlayedYet = true;
    this.success = false;
    this.pickAnswer();
    this.setImageSource();
  }

  private pickAnswer() {
    this.answer = this.randomArrayItem(this.answers);
  }

  private randomArrayItem(array): any {
    return array[Math.floor(Math.random() * array.length)];
  }

}
