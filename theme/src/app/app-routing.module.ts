import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'router', loadChildren: './page/angular/router/router.module#RouterPageModule' },
  { path: 'router/:id', loadChildren: './page/angular/router/router.module#RouterPageModule' },
  { path: 'form', loadChildren: './page/angular/form/form.module#FormPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
