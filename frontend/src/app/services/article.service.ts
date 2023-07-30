import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url: string = "http://127.0.0.1:3000";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  listArticle(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url+'/api/v1/articles');
  }

  addArticle(article: Article) { 
    return this.http.post<Article>(this.url+"/api/v1/articles", article, this.httpOptions);
  }

  findArticle(id: string): Observable<Article> {
    return this.http.get<Article>(this.url+"/api/v1/articles/"+id);
  }

  updateArticle(article: Article, id: string) {
    return this.http.put(this.url+"/api/v1/articles/"+id, article, this.httpOptions);
  }

  deleteArticle(id: string) {
    return this.http.delete(this.url+"/api/v1/articles/"+id);
  }
}
