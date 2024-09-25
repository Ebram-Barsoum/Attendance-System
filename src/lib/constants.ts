import { ReactNode } from "react";

export interface Link {
    href: string,
    text: string,
    icon?: ReactNode
}

export interface Session {
    id: string,
    title: string
    userName: string,
    userImage: string,
    individuals: number,
    time: string,
    date: Date,
    status: string
}

