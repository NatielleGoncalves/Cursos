import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { FeedPage } from '../feed/feed'; //Classe importada.

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = FeedPage; // Após colocar o nome da classe que está no arquivo feed.ts é necessário importar a classe.

  constructor() {

  }
}
