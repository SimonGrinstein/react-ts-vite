export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage?: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: IReviews[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
      createdAt: string;
      updatedAt: string;
      barcode: number;
      qrCode: string;
    };
    images: string[];
    thumbnail: string;
  }

  
interface IReviews {
    rating: 2;
    comment: string;
    date: Date;
    reviewerName: string;
    reviewerEmail: string;
  }