import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth';
import { DataForSearchPage } from '../data-for-search/data-for-search';

/**
 * Generated class for the BookSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-search',
  templateUrl: 'book-search.html',
  providers: [
    AngularFireAuth,
    BooksProvider
  ]
})
export class BookSearchPage {

  public list_books = new Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public serviceAuth:AuthProvider,
    public authFB:AngularFireAuth,
    public booksProvider: BooksProvider,
  ) {
  }

  ionViewDidLoad() {
    //let name = navParams.get('name');
    this.booksProvider.getLivroPorIsbn(this.navParams.get('isbn')).subscribe(
      data=>{
        const response = (data as any);
        const obj_retorno = JSON.parse(response._body);
        this.list_books = obj_retorno.items;
        console.log(this.list_books);
      }, error=>{
        console.log(error);
      }

    )
    //console.log(this.navParams.get('isbn'));
  }

  /*public getLivro(dados){
    //if(data.isbn){
      this.booksProvider.getLivroPorIsbn(dados.isbn).subscribe(
        data=>{
          const response = (data as any);
          const obj_retorno = JSON.parse(response._body);
          this.list_books = obj_retorno.items;
          console.log(this.list_books);
        }, error=>{
          console.log(error);
        }
  
      )
    //}
  }*/

}
