// Tools
import { customFetch } from '../tools';

// Types
type Message = {
    _id: string
    username: string
    text: string
    createdAt: string
    updatedAt: string
}

export const onClick = async () => {
    const result = await customFetch<Array<Message>>({
        successStatusCode: 200,
        fetch:             () => fetch(`${process.env.API_URL}/messages`, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }),
    });

    console.log(result);
};
