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

export const createUser = async (user: user, password: string) => {
    var data = await fetch('https://ecommerce.back.zykov.xyz/api/management/user/create', {
        method: 'PUT',
        headers: new Headers({
            'Authorization': 'Bearer ' + getToken(),
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({ "user": user, "password": password })
    }).then(function (res) {
        if (!res.ok) {
            return emptyUser;
        }
        return res.json()
    });
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
    var data = await fetch('https://ecommerce.back.zykov.xyz/api/user/update/' + id, {
        method: 'PUT',
        headers: new Headers({
            'Authorization': 'Bearer ' + getToken(),
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(user)
    }).then(function (res) {
        if (!res.ok) {
            return emptyUser;
        }
        return res.json();
    });
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
    await fetch('https://ecommerce.back.zykov.xyz/api/management/user/delete/' + id, {
        method: 'DELETE',
        headers: new Headers({
            'Authorization': 'Bearer ' + getToken(),
        }),
    }).then(function (res) {
        return res.json();
    });
};

export const getUser = async (id: number) => {
    var data = await fetch('https://ecommerce.back.zykov.xyz/api/user/get/' + id, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + getToken(),
            'Content-Type': 'application/json'
        }),
    }).then(res => res.json());
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
    await fetch('https://ecommerce.back.zykov.xyz/api/item/update/' + id, {
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
    await fetch('https://ecommerce.back.zykov.xyz/api/item/create', {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + getToken(),
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(item)
    }).then(function (res) {
        return res.json();
    });
    return item;
};

export const deleteItem = async (id: number) => {
    var data = fetch('https://ecommerce.back.zykov.xyz/api/item/delete/' + id, {
        method: 'DELETE',
        headers: new Headers({
            'Authorization': 'Bearer ' + getToken(),
            'Content-Type': 'application/json'
        }),
    }).then(function (res) {
        return res.status;
    });
    return data;
};

export const getItem = async (id: number) => {
    var data = await fetch(
        "https://ecommerce.back.zykov.xyz/api/item/get/" + id)
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
    fetch('https://ecommerce.back.zykov.xyz/api/user/logout', {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + getToken()
        }),
    }).then(res => res.json());
};

export function getToken() { return localStorage.getItem('token'); }
export function removeToken() { localStorage.removeItem('token'); }
export function setToken(token: string) { localStorage.setItem('token', token); }
