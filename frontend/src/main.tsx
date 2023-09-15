import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import './index.css';
import Shop from "./pages/shop.tsx";
import Login from "./pages/login.tsx";
import Register from "./pages/register.tsx";
import Account from "./pages/account.tsx";
import Cart from "./pages/cart.tsx";
import ProductPage from "./pages/product_page.tsx";
import ProductAdmin from "./pages/admin.tsx";
import RootLayout from './layouts/root_layout.tsx';
import Docs from './pages/docs.tsx';
import Admin from './pages/admin.tsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index element={<Shop />}></Route>
    <Route path='/cart' element={<Cart />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/register' element={<Register />}></Route>
    <Route path='/account' element={<Account />}></Route>
    <Route path='/aproduct' element={<ProductAdmin />}></Route>
    <Route path='/product/:id' element={<ProductPage />}></Route>
    <Route path='/admin' element={<Admin />}></Route>
    <Route path='/docs' element={<Docs />}></Route>
  </Route>
));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);