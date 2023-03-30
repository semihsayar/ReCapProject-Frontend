import { Rental } from "../entity/rental";
import { ResponseModel } from "./responseModel";

export interface RentalResponseModel extends ResponseModel{
    data:Rental[]
}