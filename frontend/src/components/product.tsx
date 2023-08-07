import { ReactNode, useEffect, useState } from "react";
import product from "../types/product.ts";
import Counter from "./counter.tsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import pair from "../types/pair.ts";
import { RootState } from "../store/store.ts";

function Product(product: product): ReactNode {

    const cartProducts: pair[] = useSelector<RootState>(state => state.cart) as pair[];
    const [count, setCount] = useState(0);


    useEffect(() => {
        var cnt = 0;
        for (var i = 0; i < cartProducts.length; i++) {
            if (cartProducts[i].item.id == product.id)
                cnt = cartProducts[i].count;
        }
        setCount(cnt);
    });

    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-5 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.image} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" key={count}>
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
                            <p className="leading-relaxed">{product.description}</p>

                            <Counter {...{ item: product, count: count }} />

                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
                                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy</button>
                            </div>
                            <div className="flex pt-4">
                                <Link className="flex ml-auto"
                                    to="/cart">
                                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">To Cart</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Product;