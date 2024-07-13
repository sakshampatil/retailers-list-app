export interface IRetailer {
  name: string;
  lastVisitDate: Date;
  lastOrderDate: Date;
  lastOrderValue: number;
  photo: string;
  id: number;
  zipCode: number;
  state: string;
  city: string;
}
