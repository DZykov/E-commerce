import address from "./address";

type user = {
    id: number,
    firstname: string;
    lastname: string;
    email: string;
    enabled: boolean;
    nonLocked: boolean;
    role: string;
    address: address;
    token: string;
};

export default user;
