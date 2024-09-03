export interface ExampleResponse {
    name: string;
    message: string;
}

export interface ReponseApi<T> {
    message: string;
    response: T;
}