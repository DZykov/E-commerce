import product from "../types/product";
import user from "../types/user";



const emptyUser: user = {
    id: 0,
    firstname: "firstname",
    lastname: "lastname",
    email: "email",
    enabled: true,
    nonLocked: true,
    role: "USER",
    street: "street",
    city: "city",
    country: "country",
    postalCode: "postalCode",
    access_token: "token",
};

const emptyProduct: product = {
    id: 0,
    name: "",
    price: 0,
    category: "",
    description: "",
    pictures: []
}

export const createUser = async (user: user) => {
    var data = await fetch('http://localhost:3000/api/management/user/create', {
        method: 'PUT',
        headers: new Headers({
            'Authorization': 'Bearer ' + getToken(),
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(user)
    }).then(res => res.json());
    let user_n: user = emptyUser;
    user_n.city = data.city;
    user_n.id = data.id;
    user_n.country = data.country;
    user_n.email = data.email;
    user_n.enabled = data.enabled;
    user_n.firstname = data.firstname;
    user_n.id = data.id;
    user_n.lastname = data.lastname;
    user_n.nonLocked = data.nonLocked;
    user_n.postalCode = data.postalCode;
    user_n.role = data.role;
    user_n.street = data.street;
    return user_n;
};

export const updateUser = async (user: user, id: number) => {
    var data = await fetch('http://localhost:3000/api/management/user/update/' + id, {
        method: 'PUT',
        headers: new Headers({
            'Authorization': 'Bearer ' + getToken(),
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(user)
    }).then(res => res.json());
    let user_n: user = emptyUser;
    user_n.city = data.city;
    user_n.id = data.id;
    user_n.country = data.country;
    user_n.email = data.email;
    user_n.enabled = data.enabled;
    user_n.firstname = data.firstname;
    user_n.id = data.id;
    user_n.lastname = data.lastname;
    user_n.nonLocked = data.nonLocked;
    user_n.postalCode = data.postalCode;
    user_n.role = data.role;
    user_n.street = data.street;
    return user_n;
};

export const blockUser = async (block: boolean, id: number) => {
    await fetch('/api/management/user/block/' + block + '/' + id, {
        method: 'PUT',
        headers: new Headers({
            'Authorization': 'Bearer ' + getToken(),
        }),
    }).then(res => res.json());
};

export const deleteUser = async (id: number) => {
    await fetch('/api/management/user/delete/' + id, {
        method: 'DELETE',
        headers: new Headers({
            'Authorization': 'Bearer ' + getToken(),
        }),
    }).then(res => res.json());
};

export const getUser = async (id: number) => {
    var data = await fetch('http://localhost:3000/api/user/get/' + id, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + getToken(),
            'Content-Type': 'application/json'
        }),
    }).then(res => res.json());
    console.log(data);
    let user: user = emptyUser;
    user.city = data.city;
    user.id = data.id;
    user.country = data.country;
    user.email = data.email;
    user.enabled = data.enabled;
    user.firstname = data.firstname;
    user.id = data.id;
    user.lastname = data.lastname;
    user.nonLocked = data.nonLocked;
    user.postalCode = data.postalCode;
    user.role = data.role;
    user.street = data.street;
    return user;
};


export const updateItem = async (item: product, id: number) => {
    await fetch('http://localhost:3000/api/management/item/update/' + id, {
        method: 'PUT',
        headers: new Headers({
            'Authorization': 'Bearer ' + getToken(),
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(item)
    }).then(res => res.json());
    return item;
};

export const createItem = async (item: product) => {
    await fetch('http://localhost:3000/api/management/item/create/', {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + getToken(),
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(item)
    }).then(res => res.json());
    return item;
};

export const deleteItem = async (id: number) => {
    fetch('http://localhost:3000/api/management/item/delete/' + id, {
        method: 'PUT',
        headers: new Headers({
            'Authorization': 'Bearer ' + getToken(),
            'Content-Type': 'application/json'
        }),
    }).then(res => res.json());
};


export const getItem = async (id: number) => {
    var data = await fetch(
        "http://localhost:3000/api/item/get/" + id)
        .then((res) => res.json());
    let item: product = emptyProduct;
    item.category = data.category;
    item.description = data.description;
    item.id = data.id;
    item.name = data.name;
    item.pictures = data.pictures;
    item.price = data.price;
    return item;
}

export const logout = async () => {
    fetch('http://localhost:3000/api/user/logout', {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + getToken()
        }),
    }).then(res => res.json());
};

export function getToken() { return localStorage.getItem('token'); }
export function removeToken() { localStorage.removeItem('token'); }
export function setToken(token: string) { localStorage.setItem('token', token); }
