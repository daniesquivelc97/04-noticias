import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild(IonSegment) segment: IonSegment;
  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  noticias: Article[] = [];

  constructor( private noticiasService: NoticiasService) {}

  ionViewDidEnter() {
    this.segment.value = this.categorias[0];
    this.cargarNoticias( this.categorias[0] );
  }

  cambioCategoria( event ){
    this.noticias = [];
    this.cargarNoticias( event.detail.value );
  }

  cargarNoticias( categoria: string, event? ){
    this.noticiasService.getTopHeadlinesCategoria( categoria )
          .subscribe( resp => {
            this.noticias.push( ...resp.articles );

            if (event) {
              event.target.complete();
            }
          });
  }

  loadData( event ){
    this.cargarNoticias( this.segment.value, event );
  }
}
