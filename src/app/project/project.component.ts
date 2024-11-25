import { Component, Input } from '@angular/core';

@Component({
  selector: 'project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input ({required: true}) name!: string;
  @Input ({required: true}) link!: string;
  @Input ({required: true}) description!: string;

}
