import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {CatalogueDTO} from "../models/catalogue-dto";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private httpClient: HttpClient) { }

  /*
   * Return a list of all media with all fields
   */
  public catalogue(): Observable<CatalogueDTO[]>  {
    const restUrl = environment.baseUrl + '/api/catalogue';
    return this.httpClient.get <CatalogueDTO[]>(restUrl);
  }
}
