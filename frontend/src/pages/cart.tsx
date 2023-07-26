import { useSelector } from "react-redux";
import state from "../store/state.ts";
import pair from "../classes/pair.ts";
import { Link } from "react-router-dom";
import Counter from "../components/counter.tsx";

function Cart() {

    const cartProducts: pair[] = useSelector<state>(state => state.cart) as pair[];

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
            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Remove</button>
        </div>
    ));

    return (
        <>
            <section className="text-gray-600 body-font pt-4">
                <div className="container mx-auto grid gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3">
                    {cards}
                </div>
                <div className="bg-red-100">price total</div>
            </section>
        </>
    );
}

export default Cart;