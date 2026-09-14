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

export interface OwnerForm{
    id?: number;
    name: string;
    email: string;
    phone: string;
    projectId?: number;
    bua?: string;
    phase?: string;
    code?: string;
    category?: number;
    propertyType?: number;
    notes?: string;
}