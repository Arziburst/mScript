import { onClick } from './api';

export const mScript = {
    onClick,
};

window.addEventListener('load', () => {
    window.mScript = mScript;
});
