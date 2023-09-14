type user = {
    id: number,
    firstname: string;
    lastname: string;
    email: string;
    enabled: boolean;
    nonLocked: boolean;
    role: string;
    street: "street",
    city: "city",
    country: "country",
    postalCode: "postalCode",
    access_token?: string;
};

export default user;
