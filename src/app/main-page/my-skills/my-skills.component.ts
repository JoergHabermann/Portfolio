import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface Skill {
  name: string;
  pic: string;
}

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [NgFor, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})

export class MySkillsComponent {

  skills: Skill[] = [
    { name: "Angular", pic: "../../../assets/img/angular.svg" },
    { name: "TypeScript", pic: "../../../assets/img/typescript.svg" },
    { name: "JavaScript", pic: "../../../assets/img/javascript.svg" },
    { name: "HTML", pic: "../../../assets/img/html.svg" },
    { name: "CSS", pic: "../../../assets/img/css.svg" },
    { name: "GIT", pic: "../../../assets/img/git.svg" },
    { name: "Rest-Api", pic: "../../../assets/img/api.svg" },
    { name: "Firebase", pic: "../../../assets/img/firebase.svg" },
    { name: "Scrum", pic: "../../../assets/img/scrum.svg" },
    { name: "Material design", pic: "../../../assets/img/materialdesign.svg" }
  ];
  
}
