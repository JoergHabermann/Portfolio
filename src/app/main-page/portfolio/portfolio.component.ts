import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { NgFor } from '@angular/common';

interface Project {
  title: string;
  skills: string;
  description: string;
  test: string;
  github: string;
  image: string;
  picleft: boolean;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent,NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Join',
      skills: 'JavaScript | HTML | CSS | Firebase',
      description: `Task manager inspired by the Kanban System. Create and organize tasks
            using drag and drop functions, assign users and categories.`,
      test: '',
      github: '',
      image: '../../../assets/img/join.png',
      picleft: false,
    },
    {
      title: 'Sharkie',
      skills: 'JavaScript | HTML | CSS | OOP',
      description: `A simple Jump-and-Run game based on an object-oriented approach. 
      Help sharkie to find coins and poison bottles to fight against the killer whale.`,
      test: '',
      github: '',
      image: '../../../assets/img/sharkie.png',
      picleft: true,
    },
    {
      title: 'Pokédex',
      skills: 'JavaScript | HTML | CSS | API',
      description: `Based on the PokéAPI a simple library that provides and 
      catalogues pokemon information.`,
      test: '',
      github: '',
      image: '../../../assets/img/pokedex.png',
      picleft: false,
    }    
  ];
}
