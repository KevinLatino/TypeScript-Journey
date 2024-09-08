import CategoryModel from "../categories/categories.model"

export type Sizes = "S" | "M" | "L" | "XL"


export interface ProductModel {
    id: number | string,
    title: string,
    size: Sizes,
    price: number,
    category: CategoryModel
}