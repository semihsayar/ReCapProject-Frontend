import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from 'src/app/models/entity/carImage';
import { ListResponseModel } from 'src/app/models/responseModel/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = "https://localhost:44362/"
  constructor(private httpClient:HttpClient) { }

  getImageByCar(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath =  this.apiUrl + "api/CarImages/getbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  getImagePath(carImage: string):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl+"api/uploads/Images/="+carImage
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}
