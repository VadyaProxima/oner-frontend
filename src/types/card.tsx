import { Category } from "./category";

export type Card = {
    id: number;
    image: string;
    name: string;
    price: number;
    category: Category;
  };