import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MealListComponent } from './meal-list/meal-list.component'

const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
