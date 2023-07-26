import { useDispatch } from "react-redux";
import pair from "../classes/pair.ts";
import { add, decrementItem } from "../store/cartSlice.ts";
import { useState } from "react";

function Counter(obj: pair) {

    const [count, setCount] = useState(obj.count);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    };

    const disppatch = useDispatch();

    const addToCart = () => {
        incrementCount();
        disppatch(add(obj.item));
    };

    const decrementItemCart = () => {
        decrementCount();
        disppatch(decrementItem(obj.item));
    };

    return (
        <>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex items-center">
                    <span className="mr-3">Count</span>
                    <div className="h-10 w-32">
                        <div className="flex flex-row h-8 w-full rounded-lg relative bg-transparent mt-1">
                            <button onClick={decrementItemCart} className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                <span className="m-auto text-2xl font-thin">−</span>
                            </button>
                            <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={count} readOnly></input>
                            <button onClick={addToCart} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                <span className="m-auto text-2xl font-thin">+</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Counter;