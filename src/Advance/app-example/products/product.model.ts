import CategoryModel from "../categories/categories.model"
import BaseModel from "../base-model/base.model"

export type Sizes = "S" | "M" | "L" | "XL" | "XXL"


export interface ProductModel extends BaseModel {
    size: Sizes,
    price: string,
    category: CategoryModel
}