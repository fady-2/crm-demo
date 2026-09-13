export interface Owner {
    id: number;
    name: string;
    mobile: string;
    assigendTo: string;
    requests: number;
    stage: string;
    project: string;
    probertyType: string;
    currentActoin: string;
    lastComment: string;
    action?: string;
    email?: string;
    creationDate?: string;
    lastUpdate?: string;
    sellerRequest?: string;
    salesRep?: {
        name: string;
        email: string;
    };
    bua?: number;
    phase?: string;
    code?: string;
    category?: string;
    property?:string
}