export interface Broker {
    id: number;
    name: string;
    mobile: string;
    assigendTo:string;
    requests: number;
    stage: string;
    project: string;
    probertyType: string;
    currentActoin: string;
    lastComment: string;
    action?: string;
}