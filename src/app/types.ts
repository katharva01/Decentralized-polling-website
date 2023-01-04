export interface Poll extends PollForm {
    id : number;
    votes : number[];
    voted:boolean;
}

export interface PollForm {
    question : string;
    options : any[];
    thumbnailUrl: string;
}

export interface Vote{
    id: any;
    votes : number[];
}