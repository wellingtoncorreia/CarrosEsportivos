import { CarProperty } from "./carProperty";

export interface Car {
  name: string;
  price: string;
  image: string;
  modelUrl: string;
  properties: CarProperty[];
  reviews?: number;
  rating?: number;
}