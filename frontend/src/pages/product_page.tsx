import { useParams } from "react-router-dom";
import Product from "../components/product";
import { useEffect, useState } from "react";
import product from "../types/product";
import { getItem } from "../store/api";

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
            const data: product = await getItem(parseInt(ID!));
            setProduct(data);
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