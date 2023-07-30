import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarticlesComponent } from './listarticles/listarticles.component';
import { CreatearticleComponent } from './createarticle/createarticle.component';
import { EditarticleComponent } from './editarticle/editarticle.component';

const routes: Routes = [
  { path: '', component: ListarticlesComponent }, 
  { path: 'create/article', component: CreatearticleComponent },
  { path: 'edit/article/:articleId', component: EditarticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
