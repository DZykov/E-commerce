import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { Provider } from "react-redux";
import store from "../store/store";
import { getMe } from "../store/userSlice";
import { getCart } from "../store/cartSlice";

function RootLayout() {

    store.dispatch(getMe());
    store.dispatch(getCart());

    return (
        <>
            <Provider store={store}>
                <Navbar />
                <main>
                    <Outlet />
                </main>
            </Provider>
        </>
    );
};

export default RootLayout;