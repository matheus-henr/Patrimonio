import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItemService {

  url = "http://localhost:8080/itens";
  

  constructor(private http: HttpClient) { }


  listar(){
    return this.http.get<any[]>(this.url);
  }

  cadastrar(item: any){
    console.log(item);
    return this.http.post(this.url, item);
  }


  apagar(id: any){
    console.log("http://localhost:8080/itens/" + id);
    return this.http.delete( "http://localhost:8080/itens/" + id);
  }

  buscar(id: any){
    console.log("http://localhost:8080/itens/" + id);
    return this.http.get( "http://localhost:8080/itens/" + id);
  }

}
