import { useRef } from "react";
import Collapsible from "../components/collapsible";
import { Tab, Tabs } from "../components/tabs";
import user from "../types/user";
import { blockUser, createItem, createUser, deleteItem, deleteUser, getUser, updateItem, updateUser } from "../store/api";
import { RootState, useAppSelector } from "../store/store";
import product from "../types/product";

function Admin() {

    const user: user = useAppSelector((state: RootState) => state.user);

    // user fields
    const userIdRef = useRef<HTMLInputElement>(null);
    const firstRef = useRef<HTMLInputElement>(null);
    const lastRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const countryRef = useRef<HTMLInputElement>(null);
    const cityRef = useRef<HTMLInputElement>(null);
    const streetRef = useRef<HTMLInputElement>(null);
    const postalRef = useRef<HTMLInputElement>(null);
    const roleRef = useRef<HTMLSelectElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);


    // user fields
    const userIdRef1 = useRef<HTMLInputElement>(null);
    const firstRef1 = useRef<HTMLInputElement>(null);
    const lastRef1 = useRef<HTMLInputElement>(null);
    const emailRef1 = useRef<HTMLInputElement>(null);
    const countryRef1 = useRef<HTMLInputElement>(null);
    const cityRef1 = useRef<HTMLInputElement>(null);
    const streetRef1 = useRef<HTMLInputElement>(null);
    const postalRef1 = useRef<HTMLInputElement>(null);


    // product fields
    const itemIdRef = useRef<HTMLInputElement>(null);
    const productNameRef = useRef<HTMLInputElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);
    const categoryRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const picturesRef = useRef<HTMLInputElement>(null);

    // product fields
    const itemIdRef1 = useRef<HTMLInputElement>(null);
    const productNameRef1 = useRef<HTMLInputElement>(null);
    const priceRef1 = useRef<HTMLInputElement>(null);
    const categoryRef1 = useRef<HTMLInputElement>(null);
    const descriptionRef1 = useRef<HTMLInputElement>(null);
    const picturesRef1 = useRef<HTMLInputElement>(null);

    // extra fields
    const booleanRef = useRef<HTMLSelectElement>(null);
    const idRef = useRef<HTMLInputElement>(null);
    const idRef1 = useRef<HTMLInputElement>(null);
    const idRef2 = useRef<HTMLInputElement>(null);
    const idRef3 = useRef<HTMLInputElement>(null);


    const createUserF = async () => {
        if (firstRef.current!.value == null
            || lastRef.current!.value == null
            || emailRef.current!.value == null
            || countryRef.current!.value == null
            || cityRef.current!.value == null
            || streetRef.current!.value == null
            || postalRef.current!.value == null
            || passwordRef.current!.value == null) {
            return;
        }

        var new_user: user = {
            firstname: firstRef.current!.value,
            lastname: lastRef.current!.value,
            email: emailRef.current!.value,
            country: countryRef.current!.value,
            city: cityRef.current!.value,
            street: streetRef.current!.value,
            postalCode: postalRef.current!.value,
            id: parseInt(userIdRef.current!.value),
            role: roleRef.current!.value,
            enabled: true,
            nonLocked: true
        }

        await createUser(new_user, passwordRef.current!.value);
    }

    const updateUserF = async () => {
        if (firstRef1.current!.value == null
            || lastRef1.current!.value == null
            || emailRef1.current!.value == null
            || countryRef1.current!.value == null
            || cityRef1.current!.value == null
            || streetRef1.current!.value == null
            || postalRef1.current!.value == null) {
            return;
        }

        var new_user: user = {
            firstname: firstRef1.current!.value,
            lastname: lastRef1.current!.value,
            email: emailRef1.current!.value,
            country: countryRef1.current!.value,
            city: cityRef1.current!.value,
            street: streetRef1.current!.value,
            postalCode: postalRef1.current!.value,
            id: parseInt(userIdRef1.current!.value),
            role: "USER",
            enabled: true,
            nonLocked: true
        }
        await updateUser(new_user, parseInt(userIdRef1.current!.value));
    }

    const blockUserF = async () => {
        if (idRef.current!.value == null
            || booleanRef.current!.value == null) {
            return;
        }
        var block: boolean = true;
        if (booleanRef.current!.value == "False") {
            block = false;
        }
        await blockUser(block, parseInt(idRef.current!.value));
    }

    const deleteUserF = async () => {
        if (idRef1.current!.value == null) {
            return;
        }
        await deleteUser(parseInt(idRef1.current!.value));
    }

    const getUserF = async () => {
        if (idRef2.current!.value == null) {
            return;
        }
        await getUser(parseInt(idRef2.current!.value));
        //console.log(data)
    }

    const updateItemF = async () => {
        if (!itemIdRef1.current?.value
            || !productNameRef1.current?.value
            || !priceRef1.current?.value
            || !categoryRef1.current?.value
            || !descriptionRef1.current?.value
            || !picturesRef1.current?.value) {
            return;
        }

        var arrayPics: string[] = picturesRef1.current?.value.split(' ');

        var new_product: product = {
            id: parseInt(itemIdRef1.current?.value),
            name: productNameRef1.current?.value,
            price: parseFloat(priceRef1.current?.value),
            category: categoryRef1.current?.value,
            description: descriptionRef1.current?.value,
            pictures: arrayPics,
        };
        await updateItem(new_product, parseInt(itemIdRef1.current?.value));
    }

    const createItemF = async () => {
        if (!itemIdRef.current?.value
            || !productNameRef.current?.value
            || !priceRef.current?.value
            || !categoryRef.current?.value
            || !descriptionRef.current?.value
            || !picturesRef.current?.value) {
            return;
        }

        var arrayPics: string[] = picturesRef.current?.value.split(' ');

        var new_product: product = {
            id: parseInt(itemIdRef.current?.value),
            name: productNameRef.current?.value,
            price: parseFloat(priceRef.current?.value),
            category: categoryRef.current?.value,
            description: descriptionRef.current?.value,
            pictures: arrayPics,
        };
        await createItem(new_product);
    }

    const deleteItemF = async () => {
        if (idRef3.current!.value == null) {
            return;
        }
        await deleteItem(parseInt(idRef3.current!.value));
    }

    return (
        <>
            <div style={{ width: "90%", margin: "auto" }}>
                <Tabs>
                    {user.role == "ADMIN" ?
                        <Tab label="Admin">
                            <div className="py-4">
                                <Collapsible
                                    open={false}
                                    title="Create any user"
                                >
                                    <h6 className="text-lg font-medium mb-2">Creates user with any role. Returns success message.</h6>

                                    {// user
                                    }
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="id" name="id" ref={userIdRef} placeholder="Id"></input>
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="fname" name="fname" ref={firstRef} placeholder="First name"></input>
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="lname" name="lname" ref={lastRef} placeholder="Last name"></input>
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="email" name="email" ref={emailRef} placeholder="Email"></input>
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="pass" name="pass" ref={passwordRef} placeholder="Password"></input>

                                    <select className="bg-white" name="role" id="role" ref={roleRef}>
                                        <option value="USER">User</option>
                                        <option value="ADMIN">Admin</option>
                                        <option value="MANAGER">Manager</option>
                                    </select>

                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="country" name="country" ref={countryRef} placeholder="Country"></input>
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="city" name="city" ref={cityRef} placeholder="City"></input>
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="street" name="street" ref={streetRef} placeholder="Street"></input>
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="postalCode" name="postalCode" ref={postalRef} placeholder="Postal Code"></input>

                                    <button onClick={createUserF} className="rounded-full bg-cyan-300 p-1 text-sm">Save Changes</button>

                                </Collapsible>

                                <Collapsible
                                    open={false}
                                    title="Block any user"
                                >

                                    {// extra
                                    }
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="id" name="id" ref={idRef} placeholder="Id"></input>

                                    <select className="bg-white mx-4" name="boolean" id="boolean" ref={booleanRef}>
                                        <option value="true">True</option>
                                        <option value="false">False</option>
                                    </select>

                                    <button onClick={blockUserF} className="rounded-full bg-cyan-300 p-1 text-sm">Save Changes</button>
                                </Collapsible>

                                <Collapsible
                                    open={false}
                                    title="Delete any user"
                                >
                                    {// extra
                                    }
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="id" name="id" ref={idRef1} placeholder="Id"></input>

                                    <button onClick={deleteUserF} className="rounded-full bg-cyan-300 p-1 text-sm">Save Changes</button>
                                </Collapsible>
                            </div>
                        </Tab>
                        :
                        <>
                        </>
                    }

                    {user.role == "MANAGER" || user.role == "ADMIN" ?
                        <Tab label="Manager">
                            <div className="py-4">
                                <Collapsible
                                    open={false}
                                    title="Update any user"
                                >
                                    {// user
                                    }
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="id" name="id" ref={userIdRef1} placeholder="Id"></input>
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="fname" name="fname" ref={firstRef1} placeholder="First name"></input>
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="lname" name="lname" ref={lastRef1} placeholder="Last name"></input>
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="email" name="email" ref={emailRef1} placeholder="Email"></input>

                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="country" name="country" ref={countryRef1} placeholder="Country"></input>
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="city" name="city" ref={cityRef1} placeholder="City"></input>
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="street" name="street" ref={streetRef1} placeholder="Street"></input>
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="postalCode" name="postalCode" ref={postalRef1} placeholder="Postal Code"></input>

                                    <button onClick={updateUserF} className="rounded-full bg-cyan-300 p-1 text-sm">Save Changes</button>
                                </Collapsible>

                                <Collapsible
                                    open={false}
                                    title="Get any user"
                                >
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="id" name="id" ref={idRef2} placeholder="Id"></input>

                                    <button onClick={getUserF} className="rounded-full bg-cyan-300 p-1 text-sm">Save Changes</button>
                                </Collapsible>

                                <Collapsible
                                    open={false}
                                    title="Create an item"
                                >
                                    {// item
                                    }
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="idItem" name="idItem" ref={itemIdRef} placeholder="Id"></input>
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="productName" name="productName" ref={productNameRef} placeholder="Product name"></input>
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="price" name="price" ref={priceRef} placeholder="Price"></input>
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="category" name="category" ref={categoryRef} placeholder="Category"></input>
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="description" name="description" ref={descriptionRef} placeholder="Description"></input>
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="pictures" name="pictures" ref={picturesRef} placeholder="Pictures"></input>

                                    <button onClick={createItemF} className="rounded-full bg-cyan-300 p-1 text-sm">Save Changes</button>
                                </Collapsible>

                                <Collapsible
                                    open={false}
                                    title="Update any item"
                                >
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="idItem" name="idItem" ref={itemIdRef1} placeholder="Id"></input>
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="productName" name="productName" ref={productNameRef1} placeholder="Product name"></input>
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="price" name="price" ref={priceRef1} placeholder="Price"></input>
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="category" name="category" ref={categoryRef1} placeholder="Category"></input>
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="description" name="description" ref={descriptionRef1} placeholder="Description"></input>
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="pictures" name="pictures" ref={picturesRef1} placeholder="Pictures"></input>

                                    <button onClick={updateItemF} className="rounded-full bg-cyan-300 p-1 text-sm">Save Changes</button>
                                </Collapsible>

                                <Collapsible
                                    open={false}
                                    title="Delete any item"
                                >
                                    <input className="mt-4 mx-4 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="id" name="id" ref={idRef3} placeholder="Id"></input>

                                    <button onClick={deleteItemF} className="rounded-full bg-cyan-300 p-1 text-sm">Save Changes</button>
                                </Collapsible>
                            </div>
                        </Tab>
                        :
                        <></>}

                </Tabs>
            </div>
        </>
    )
}

export default Admin;