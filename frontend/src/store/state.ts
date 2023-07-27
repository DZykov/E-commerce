import pair from "../classes/pair.ts";
import product from "../classes/product.ts";

type state = {
    cart: pair[];
    shop: product[];
    logged: boolean;
    admin: boolean;
};

export default state;