import { Color } from '../entity/color';
import { ResponseModel } from './responseModel';

export interface ColorResponseModel extends ResponseModel {
  data: Color[];
}
