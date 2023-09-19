import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/store";
import user from "../types/user";
import { getMe, registerUser } from "../store/userSlice";
import { getCart } from "../store/cartSlice";

function Register() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const firstRef = useRef<HTMLInputElement>(null);
    const lastRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const countryRef = useRef<HTMLInputElement>(null);
    const cityRef = useRef<HTMLInputElement>(null);
    const streetRef = useRef<HTMLInputElement>(null);
    const postalRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);

    const registerMe = async () => {
        if (!firstRef.current?.value
            || !lastRef.current?.value
            || !emailRef.current?.value
            || !countryRef.current?.value
            || !cityRef.current?.value
            || !streetRef.current?.value
            || !postalRef.current?.value
            || !passRef.current?.value) {
            return;
        }
        var new_user: user & { password: string } = {
            id: 0,
            firstname: firstRef.current.value,
            lastname: lastRef.current.value,
            email: emailRef.current.value,
            country: countryRef.current.value,
            city: cityRef.current.value,
            street: streetRef.current.value,
            postalCode: postalRef.current.value,
            password: passRef.current.value,
            role: "USER",
            nonLocked: true,
            enabled: true,
        };
        await dispatch(registerUser(new_user));
        var data = await dispatch(getMe());

        if (data.payload.id != 0) {
            await dispatch(getCart());
            navigate("/");
        }
    }

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-1/2 md:w-1/2 sm:w-2/3 bg-gray-100 rounded-lg p-8 flex flex-col w-full mx-auto">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>

                        <div className="relative mb-4">
                            <label htmlFor="firstname" className="leading-7 text-sm text-gray-600">First name</label>
                            <input type="text" id="full-name" ref={firstRef} name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="lastname" className="leading-7 text-sm text-gray-600">Last name</label>
                            <input type="text" id="full-name" ref={lastRef} name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="text" id="email" name="email" ref={emailRef} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="country" className="leading-7 text-sm text-gray-600">Country</label>
                            <input type="text" id="country" name="country" ref={countryRef} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                            <input type="text" id="city" name="city" ref={cityRef} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="street" className="leading-7 text-sm text-gray-600">Street</label>
                            <input type="text" id="street" name="street" ref={streetRef} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="postal" className="leading-7 text-sm text-gray-600">Postal</label>
                            <input type="text" id="postal" name="postal" ref={postalRef} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input type="password" id="pass" name="pass" ref={passRef} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <button onClick={registerMe} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register</button>
                        <Link to="/login" className="font-medium text-blue-600 dark:text-blue-500 hover:underline pt-6">Log-in</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register;