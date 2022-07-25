import { mScript } from '../';

declare global {
    interface Window {
        mScript: ReturnType<typeof mScript>;
    }
}

export {};
