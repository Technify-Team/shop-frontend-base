export interface SearchRequest {
    skip: number;
    take: number;
    filter?: Filter,
    query?: Query,
    orderBy: {
        fieldName: string,
        order: Order
    }
}

export enum Order {
    asc = 'asc',
    desc = 'desc'
}

class Filter {
    fieldName: string;
    value: string;
}

class Query {
    [key: string]: string
}