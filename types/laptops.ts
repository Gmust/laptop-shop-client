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
  technical_data: TechData[];
  images: string;
  createdAt: Date;
  updatedAt: Date;
}


interface TechData {
  id: number,
  techDataId: number,
  title: string,
  description: string,
  createdAt: Date;
  updatedAt: Date;
}