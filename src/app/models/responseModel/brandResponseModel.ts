import { Brand } from '../entity/brand';
import { ResponseModel } from './responseModel';

export interface BrandResponseModel extends ResponseModel {
  data: Brand[];
}
