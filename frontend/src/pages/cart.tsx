import { useDispatch, useSelector } from "react-redux";
import pair from "../types/pair.ts";
import { Link } from "react-router-dom";
import { removeItem } from "../store/cartSlice.ts";
import Counter from "../components/counter.tsx";
import product from "../types/product.ts";
import { useEffect, useState } from "react";
import { RootState } from "../store/store.ts";

function Cart() {

    const cartProducts: pair[] = useSelector<RootState>(state => state.cart) as pair[];

    const [price, setPrice] = useState(0)

    function getTotal() {
        var total: number = 0;
        cartProducts.forEach(function (pair: pair) {
            total += pair.count * parseFloat(pair.item.price);
        });
        setPrice(total);
    }

    useEffect(() => {
        getTotal();
    });

    const disppatch = useDispatch();

    function removeFromCart(item: product) {
        disppatch(removeItem(item));
    };

    function get_items() {
        var count: number = 0;
        cartProducts.forEach(function (pair: pair) {
            count += pair.count;
        });
        return count;
    }

    const cards = cartProducts.map(pair => (
        <div className="col-span-1 flex flex-col bg-white border-2 p-4" key={pair.item.id}>
            <div className="my-auto">
                <Link to={"/product/" + pair.item.id} className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-fit object-center w-auto h-48 block mx-auto" src={pair.item.image} />
                </Link>
                <h2 className="mb-2 font-bold text-2xl">
                    <Link to={"/product/" + pair.item.id}>
                        {pair.item.title}
                    </Link>
                </h2>
                <div className="mb-4 flex flex-wrap">
                    <span className="mr-2">{pair.item.category}</span>
                </div>
                <p className="text-md text-justify">${pair.item.price}</p>
            </div>
            <div className="bottom-0 mx-auto">
                <Counter {...pair} />
            </div>
            <button onClick={() => removeFromCart(pair.item)} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Remove</button>
        </div>
    ));

    return (
        <>
            <section className="text-gray-600 body-font pt-4">
                <div className="container mx-auto grid gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3">
                    {cards}
                </div>
                <div className="p-6 lg:w-9/12 md:w-1/2 sm:full mx-auto px-6">
                    <p className="leading-relaxed">You have: {get_items()}</p>
                    <p className="leading-relaxed">Your total: ${price}</p>
                    <Link to={"/checkout"}>
                        <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">CHECKOUT</button>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default Cart;