import { useParams } from "react-router-dom";
import Product from "../components/product";
import { useEffect, useState } from "react";
import product from "../types/product";

const emptyProduct: product = {
    id: 0,
    name: "",
    price: 0,
    category: "",
    description: "",
    pictures: []
}

function ProductPage() {

    const ID = useParams().id;

    const [product, setProduct] = useState<product>(emptyProduct);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(
                "http://localhost:3000/api/item/get/" + ID)
                .then((res) => res.json())
                .then((json) => {
                    setProduct(json);
                })
        }
        fetchData()
            .catch(console.error);
    }, [])

    return (
        <>
            <Product {...product as product} />
        </>
    )
}

export default ProductPage;