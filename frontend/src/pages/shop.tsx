import Products from "../components/products.tsx";
import Search from "../components/search.tsx";

function Shop() {

    return (
        <>
            <Search />
            <Products />
            {
                /*
                   <Product id={1} title={"TITLE"} price={"PRICE"} category={"CATEGORY"} description={"DESCRIPTION"} image={"IMAGE"} />
                   <AdminProduct id={1} title={"TITLE"} price={"PRICE"} category={"CATEGORY"} description={"DESCRIPTION"} image={"IMAGE"} />
                */
            }
        </>
    );
}

export default Shop;