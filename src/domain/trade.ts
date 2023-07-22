import {Currency, Stock} from "./asset";

export interface Trade {
    price: number
    amount: number
    createdAt: string
    asset: Stock | Currency
}