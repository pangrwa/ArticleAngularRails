import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArticleService } from '../services/article.service';
import { Article } from '../article';

@Component({
  selector: 'app-createarticle',
  templateUrl: './createarticle.component.html',
  styleUrls: ['./createarticle.component.scss']
})
export class CreatearticleComponent {

  article: Article | undefined;

  articleForm = new FormGroup({
    title: new FormControl(""),
    body: new FormControl(""),
    author: new FormControl(""),
  })

  constructor(private articleService: ArticleService) {}

  onSubmit() {
    this.articleService.addArticle(this.articleForm.value as Article)
      .subscribe(article => {
        this.article = article;
      })
    this.articleForm.reset();
  }
}
 