interface OriginProps {
    name?: string;
    url?: string;
}
export interface ResponseProps {
    item?: {
        id?: number;
        name?: string;
        status?: string;
        species?: string;
        type?: string;
        gender?: string;
        origin?: OriginProps;
        location?: OriginProps;
        image?: string;
        episode?: string[];
        url?: string;
        created?: string;
    };
}
export interface ResponseItemProps {
    id?: number;
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
    origin?: OriginProps;
    location?: OriginProps;
    image?: string;
    episode?: string[];
    url?: string;
    created?: string;
}
