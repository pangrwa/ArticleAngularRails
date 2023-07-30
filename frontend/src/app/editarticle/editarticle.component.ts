import { Component } from '@angular/core';
import { Article } from '../article';
import { FormControl, FormGroup } from '@angular/forms';
import { ArticleService } from '../services/article.service';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-editarticle',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.scss']
})
export class EditarticleComponent {

  articleForm!: FormGroup;
  article: Article | undefined;
  id: number | undefined;

  constructor( 
    private articleService: ArticleService,
    private route: ActivatedRoute
    ) {

  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('articleId'));
    if (!this.id) {
      return;
    }
    this.articleService.findArticle(String(this.id))
      .subscribe(
        article => {
          this.article = article;
          console.log(article);
          this.articleForm = new FormGroup({
            title: new FormControl(this.article.title),
            body: new FormControl(this.article.body),
            author: new FormControl(this.article.author),
          })
        }
      )
  }

  onSubmit() {
    this.articleService.updateArticle(this.articleForm.value, String(this.id))
      .subscribe(article => {
        console.log("Article Updated Successfully");
      })
  }

}
