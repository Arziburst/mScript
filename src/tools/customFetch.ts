// Tools
import { ControlledError, IControlledError } from './controlledError';

// Types
import { FetchOptions } from '../types';

type CFetchContact = <SuccessData>(fetchOptions: FetchOptions) => Promise<SuccessData | IControlledError | undefined>

export const customFetch: CFetchContact = async (fetchOptions) => {
    const { requestOptions, successStatusCode } = fetchOptions;

    const requestWithParcedBody = {
        ...requestOptions,
        body: JSON.stringify(requestOptions.body),
    };

    try {
        let response: any = void 0;

        response = await fetch(fetchOptions.url, requestWithParcedBody);

        if (response.status !== successStatusCode) {
            // ---------- FAIL START ----------
            let errorData: any = void 0;

            try {
                errorData = await response.json();
            } catch {
                throw new ControlledError({ message: 'Parsing 1 error' });
            }

            throw new ControlledError({
                message:    'Client error',
                statusCode: response.status,
                data:       errorData,
            });
            // ---------- FAIL END ----------
        }

        // ---------- SUCCESS START ----------
        let successData: any = void 0;

        try {
            successData = await response.json();

            if (process.env.NODE_ENV === 'development') {
                console.warn('Success request', {
                    eventType: fetchOptions.requestOptions.body.eventType,
                    successData,
                });
            }

            return successData;
        } catch {
            throw new ControlledError({ message: 'Parsing 2 error' });
        }
        // ---------- SUCCESS END ----------
    } catch (error: any) {
        const customError: IControlledError = error;

        console.log({ ...customError });

        return customError;
    }
};
