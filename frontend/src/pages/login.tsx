import { useRef } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../store/store";
import { authUser, getMe } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { getCart } from "../store/cartSlice";

function Login() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const email = useRef<HTMLInputElement>(null);
    const pass = useRef<HTMLInputElement>(null);

    const login = async () => {
        if (email.current!.value == null
            || pass.current!.value == null) {
            return;
        }

        await dispatch(authUser({
            "email": email.current!.value,
            "password": pass.current!.value
        }));
        var data = await dispatch(getMe());

        if (data.payload.id != 0) {
            await dispatch(getCart());
            navigate("/admin");
        }
    }

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-1/2 md:w-1/2 sm:w-2/3 bg-gray-100 rounded-lg p-8 flex flex-col w-full mx-auto">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>

                        <div className="relative mb-4">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="text" ref={email} id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input type="password" ref={pass} id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <button onClick={login} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
                        <Link to="/register" className="font-medium text-blue-600 dark:text-blue-500 hover:underline pt-6">Register</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;