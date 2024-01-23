import React, {ReactNode} from "react";

export type ChildrenProps = {
    children: ReactNode;
}

export type SearchInputProps = {
    value: string;
    handleInputChange: (e: React.FormEvent<HTMLTextAreaElement>) => void;
}

type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoLocation;
}

type GeoLocation = {
    lat: string;
    lng: string;
}

type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
}

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}