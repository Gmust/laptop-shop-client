interface ILaptopsResponse {
  count: number,
  rows: ILaptop[]
}

interface ILaptopsRequest {
  offset?: number,
  limit?: number,
}

interface ILaptop {
  id: number;
  name: string;
  vendor_code: string;
  price: number;
  in_stock: number;
  bestseller: boolean;
  new: boolean;
  manufacturer: string;
  description: string;
  images: string;
  createdAt: Date;
  updatedAt: Date;
}


