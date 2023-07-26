import { useSelector } from "react-redux";
import state from "../store/state";
import { Link } from 'react-router-dom';
import pair from "../classes/pair";

function Navbar() {

    const cartProducts: pair[] = useSelector<state>(state => state.cart) as pair[];

    function get_items() {
        var count: number = 0;
        cartProducts.forEach(function (pair: pair) {
            count += pair.count;
        });
        return count;
    }

    return (
        <>
            <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-indigo-100 py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 min-[250px]:flex-wrap min-[250px]:justify-start min-[250px]:py-4"
                data-te-navbar-ref>
                <div className="flex w-full flex-wrap items-center justify-between px-3">

                    <div className="flex-grow basis-[100%] items-center min-[250px]:flex min-[250px]:basis-auto"
                        id="navbarSupportedContent1">

                        <ul className="list-style-none mr-auto flex flex-col pl-0 min-[250px]:flex-row">
                            <li className="mb-4 min-[250px]:mb-0 min-[250px]:pr-2">
                                <Link to={"/"} className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 min-[250px]:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                                >Shop</Link>
                            </li>

                            <li className="mb-4 min-[250px]:mb-0 min-[250px]:pr-2">
                                <Link className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 min-[250px]:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    to="/account">Account</Link>
                            </li>
                        </ul>
                    </div>


                    <div className="relative flex items-center">
                        <p>{get_items()}</p>
                        <Link className="mr-4 text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            to="/cart">
                            <span className="[&>svg]:w-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    <path
                                        d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                </svg>
                            </span>
                        </Link>

                        <Link className="mr-4 text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            to="/account">
                            <span className="[&>svg]:w-5">
                                <svg width="45" height="45" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M42 24V9C42 7.34315 40.6569 6 39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H24"
                                        stroke="#333" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M39.0508 33L39.0508 43" stroke="#333" strokeWidth="1" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <path d="M44 37.9497L34 37.9497" stroke="#333" strokeWidth="1" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <circle cx="24" cy="18" r="5" fill="none" stroke="#333" strokeWidth="1" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <path d="M33 31C33 26.5817 28.9706 23 24 23C19.0294 23 15 26.5817 15 31" stroke="#333"
                                        strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </span>
                        </Link>

                    </div>
                </div>
            </nav >
        </>
    );
}

export default Navbar;
