import { Component } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    {
      name: "A Test Recipe",
      description: "This is simply a test",
      imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-0ZYX3CAbP_yOVXHloSjPqEIdEjdAhPucw&usqp=CAU"
    },
    {
      name: "A Test Recipe",
      description: "This is simply a test",
      imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-0ZYX3CAbP_yOVXHloSjPqEIdEjdAhPucw&usqp=CAU"
    }
  ];
}
