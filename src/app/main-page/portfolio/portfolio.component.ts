import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface Project {
  title: string;
  skills: string;
  descriptionEN: string;
  descriptionDE: string;
  test: string;
  github: string;
  image: string;
  picleft: boolean;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent,NgFor,TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Join',
      skills: 'JavaScript | HTML | CSS | Firebase',
      descriptionEN:`Task manager inspired by the Kanban System. Create and organize tasks
      using drag and drop functions, assign users and categories.`,
      descriptionDE:`Aufgaben-Manager vom Kanban System inspiriert. Erstelle und organisiere Aufgaben
      mittels drag and drop Funktion, weise Benutzer und Kategorien zu.`,
      test: 'https://www.join.joerg-habermann.de',
      github: 'https://www.github.com/JoergHabermann/Join',
      image: 'assets/img/join.png',
      picleft: false,
    },
    {
      title: 'Sharkie',
      skills: 'JavaScript | HTML | CSS | OOP',
      descriptionEN: `A simple Jump-and-Run game based on an object-oriented approach. 
      Help sharkie to find coins and poison bottles to fight against the killer whale.`,
      descriptionDE: `Ein einfaches Jump-and Run Spiel, basierend auf einem objekt-orientierten Ansatz.
      Hilf Sharkie dabei den Killer Wal zu besiegen und sammle Münzen und Giftflaschen.`,
      test: 'https://www.sharkie.joerg-habermann.de',
      github: 'https://www.github.com/JoergHabermann/sharkie',
      image: 'assets/img/sharkie.png',
      picleft: true,
    },
    {
      title: 'Pokédex',
      skills: 'JavaScript | HTML | CSS | API',
      descriptionEN: `Based on the PokéAPI a simple library that provides and 
      catalogues pokemon information.`,
      descriptionDE: `Eine einfache Bibliothek, basierend auf der PokéAPI, welche
      Informationen über Pokemons liefert und katalogisiert.`,
      test: 'https://www.pokedex.joerg-habermann.de',
      github: 'https://www.github.com/JoergHabermann/Pokedex',
      image: 'assets/img/pokedex.png',
      picleft: false,
    }    
  ];
}
