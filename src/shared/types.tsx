export type Monster = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    company: Company,
    website: string,
    phone: string,
}

type Address = {
    city: string,
    geo: Geo,
}

type Geo = {
    lat: string,
    lon: string,
}

type Company = {
    bs: string,
    catchPhrase: string,
    name: string,
}