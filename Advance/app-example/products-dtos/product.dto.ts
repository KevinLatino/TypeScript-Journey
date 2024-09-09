import { ProductModel } from "../products/product.model";

export interface CreateProductDto extends Omit<ProductModel, "id" | "createdAt" | "updatedAt"> { }

export interface UpdateProductDto extends Partial<CreateProductDto> { }