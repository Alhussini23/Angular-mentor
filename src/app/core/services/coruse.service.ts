import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CoruseService {
  Api_url = "http://localhost:3000/courses";

  private _sharedVariable = signal<number>(0);// 1


  public sharedVariable: Signal<number> = this._sharedVariable.asReadonly();//2
  constructor(private http: HttpClient) {}

    get(){
      return this.http.get(this.Api_url)
    };
    getId(id:any){
      return this.http.get(this.Api_url + `/${id}`)
    };
    post(obj: any){
      return this.http.post(this.Api_url , obj)
    };
    delete(id:any){
      return this.http.delete(this.Api_url + `/${id}`)
    };
    ebdit(obj:any , id: any){
      return this.http.put(this.Api_url + `/${id}` , obj)
    };
    updateVariable(newValue: number): void {
    this._sharedVariable.set(newValue);
    };//3
}
