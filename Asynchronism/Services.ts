import axios from "axios";
import { Product } from "./interfaces";

const getAllProducts = async (): Promise<Product[]> => {
    const { data } = await axios.get("https://api.escuelajs.co/api/v1/products");
    return data
}

const main = async (): Promise<void> => {
    const products = await getAllProducts();
    console.log(products);
};

main();