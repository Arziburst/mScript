// Tools
import { customFetch } from './tools';

// Types
import { onEventPayload } from './types';

export const onEvent = async (payload: onEventPayload) => {
    await customFetch<boolean>({
        successStatusCode: 201,
        url:               `${process.env.API_URL}/events`,
        requestOptions:    {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: payload,
        },
    });
};

if (window) {
    window.mScript = {
        onEvent,
    };
}

exports.onEvent = onEvent;
