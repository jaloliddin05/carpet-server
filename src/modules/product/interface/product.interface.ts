import { ICategory } from "../../category/interface";
import { IOrder } from "../../order/interface";

interface IProduct {
  id: string;
  img: string[];
  title: string;
  size: string[];
  category?: ICategory;
  categoryId?: string;
  description: string;
  price: string;
  color: string;
  orders?: IOrder[];
}

export default IProduct;
