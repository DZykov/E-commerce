import { useParams } from "react-router-dom";
import Product from "../components/product";
import { useEffect, useState } from "react";
import product from "../types/product";

function ProductPage() {

    const ID = useParams().id;

    const [product, setProduct] = useState<product>();

    const fetchProduct = () => {
        fetch(
            "https://fakestoreapi.com/products/" + ID)
            .then((res) => res.json())
            .then((json) => {
                setProduct(json);
            })
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <>
            <Product {...product as product} />
        </>
    )
}

export default ProductPage;