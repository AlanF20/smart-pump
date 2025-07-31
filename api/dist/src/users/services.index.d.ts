import { User } from "../../types";
export declare const getUsers: () => Promise<{
    _id: string;
    guid: string;
    isActive: boolean;
    picture: string;
    age: number;
    eyeColor: string;
    name: {
        first: string;
        last: string;
    };
    company: string;
    email: string;
    phone: string;
    address: string;
}[] | undefined>;
export declare const getUser: (id: string) => Promise<{
    _id: string;
    guid: string;
    isActive: boolean;
    picture: string;
    age: number;
    eyeColor: string;
    name: {
        first: string;
        last: string;
    };
    company: string;
    email: string;
    phone: string;
    address: string;
}>;
export declare const createUser: (user: User) => Promise<{
    _id: string;
    guid: string;
    isActive: boolean;
    picture: string;
    age: number;
    eyeColor: string;
    name: {
        first: string;
        last: string;
    };
    company: string;
    email: string;
    phone: string;
    address: string;
}>;
export declare const updateUser: (id: string, updatedData: User) => Promise<User | null>;
export declare const getUserByEmail: (email: string) => Promise<User | undefined>;
export declare const getUserBalance: (id: string) => Promise<string | undefined>;
