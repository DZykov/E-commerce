type user = {
    id: number,
    firstname: string;
    lastname: string;
    email: string;
    enabled: boolean;
    nonLocked: boolean;
    role: string;
    street: string,
    city: string,
    country: string,
    postalCode: string,
    access_token?: string;
};

export default user;
