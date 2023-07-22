export interface Asset {
    _id: string
    name: string
}

export interface Stock extends Asset{
    market: 'ko' | "en"
    ticker: string
}

export interface Currency extends Asset{
    country: "Ko" | "en"
}