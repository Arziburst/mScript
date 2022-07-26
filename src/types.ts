export type onEventPayload = {
    eventType: string
    data: any
}

export type FetchOptions = {
    url: string,
    requestOptions: {
        method: string,
        headers: any,
        body: onEventPayload
    };
    successStatusCode: number;
}
