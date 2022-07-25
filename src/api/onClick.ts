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
        fetch:             () => fetch('https://api.barbarossa.pp.ua/messages', {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }),
    });

    console.log(result);
};
