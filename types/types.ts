export interface IRetailer {
  name: string;
  lastVisitDate: Date;
  lastOrderDate: Date;
  lastOrderValue: number;
  image: string;
  id: number;
  zipCode: number;
  state: string;
  city: string;
  latitude: number;
  longitude: number;
}
