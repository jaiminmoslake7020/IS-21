export type Developer = {
  id?: string,
  name: string,
};

export type DeveloperName = string;
export type DeveloperId = string;

export type MethodologyType = 'Agile' | 'Waterfall'

export type Product = {
  productId?: string,
  productName: string,
  startDate: Date,
  methodology: MethodologyType,
  scrumMasterName: string,
  Developers: DeveloperName[],
  productOwnerName: string,
  location: string
};

export type ProductKey = keyof Product;

export const ProductLabel = {
  productId: 'Product Id',
  productName: 'Product Name',
  startDate: 'Start Date',
  methodology: 'Methodology',
  scrumMasterName: 'Scrum Master',
  productOwnerName: 'Owner',
  location: 'Location',
  Developers: 'Developers',
} as Record<ProductKey, string>;

export const methodologiesList = ['Agile', 'Waterfall'] as MethodologyType[];
