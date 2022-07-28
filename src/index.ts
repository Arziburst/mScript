// Types
export type onEventPayload = {
    eventType: string
    data: any
}

export const onEvent = (payload: onEventPayload) => {
    const result = navigator.sendBeacon(
        `${process.env.API_URL}/events`,
        new Blob([ JSON.stringify(payload) ], {
            type: 'application/json',
        }),
    );

    console.log('🚀 result', result);
};

try {
    if (window) {
        window.mScript = {
            onEvent,
        };
    }
} catch (error) { } // eslint-disable-line no-empty

try {
    exports.onEvent = onEvent;
} catch (error) { } // eslint-disable-line no-empty

