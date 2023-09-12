import product from "../types/product";
import { useEffect } from "react";
import { add } from "../store/cartSlice";
import { Link } from "react-router-dom";
import { getProducts } from "../store/shopSlice";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";


// change product to product[]

function Products() {

    const dispatch = useAppDispatch();
    const products: product[] = useAppSelector((state: RootState) => state.shop);


    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const addToCart = (product: product) => {
        dispatch(add(product));
    };

    const cards = products.map(product => (

        <div className="col-span-1 flex flex-col bg-white border-2 p-4" key={product.id}>
            <div className="my-auto">
                <Link to={"/product/" + product.id} className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-fit object-center w-auto h-48 block mx-auto" src={product.pictures[0]} />
                </Link>
                <h2 className="mb-2 font-bold text-2xl">
                    <Link to={"/product/" + product.id}>
                        {product.name}
                    </Link>
                </h2>
                <div className="mb-4 flex flex-wrap">
                    <span className="mr-2">{product.category}</span>
                </div>
                <p className="text-md text-justify">${product.price}</p>
            </div>
            <div className="bottom-0 mx-auto">
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={() => addToCart(product)}>To Cart</button>
            </div>
        </div>
    ));

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto grid gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3">
                    {cards}
                </div>
            </section>
        </>
    );
}

export default Products;
