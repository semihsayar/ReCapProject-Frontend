import { Customer } from '../entity/customer';
import { ResponseModel } from './responseModel';

export interface CustomerResponseModel extends ResponseModel {
  data: Customer[];
}
