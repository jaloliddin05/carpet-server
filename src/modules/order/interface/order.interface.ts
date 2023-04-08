import { IProduct } from "../../product/interface";

interface IOrder {
  id: string;
  name: string;
  phoneNumber: string;
  product?: IProduct;
  productId?: string;
  count: number;
  address: string;
  isViewed: boolean;
}

export default IOrder;
