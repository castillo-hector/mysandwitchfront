import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Order, Category } from 'src/app/app.models'; 
import {MenuItem, MenuItemImage} from 'src/app/models/product';
import { AppSettings } from 'src/app/app.settings'; 
import { environment } from 'src/environments/environment';   

export class Data {
  constructor(
              public favorites: MenuItem[] 
              ) { }
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public Data = new Data(
    []  // categories 
  )  
  
  public url = environment.url + '/assets/data/'; 
  
  constructor(public http:HttpClient, 
              public dialog: MatDialog,
              public appSettings:AppSettings,
              public translateService: TranslateService) { }


  public getMenuItems(): Observable<MenuItem[]>{
    //return this.http.get<MenuItem[]>(this.url + 'menu-items.json');
    return this.http.get<MenuItem[]>(this.url + 'menu-chino.json');
  } 
 
  public getMenuItemById(id:number): Observable<MenuItem>{
    return this.http.get<MenuItem>(this.url + 'menu-item-' + id + '.json');
  }
 
  public getSpecialMenuItems(): Observable<MenuItem[]>{
    return this.http.get<MenuItem[]>(this.url + 'special-menu-items.json');
  } 

  public getBestMenuItems(): Observable<MenuItem[]>{
    return this.http.get<MenuItem[]>(this.url + 'best-menu-items.json');
  } 
}
