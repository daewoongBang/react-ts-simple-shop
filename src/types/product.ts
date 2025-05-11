export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  options: string[];
  description: string;
}

export interface CartItem {
  id: string;
  image: string;
  title: string;
  price: number;
  selectedOption: string;
  quantity: number;
}
