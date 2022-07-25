// Core
import { Configuration } from 'webpack';

// Tools
import { nodeModulePath } from '../constants';

export const loadTypeScript = (): Configuration => ({
    module: {
        rules: [
            {
                test:    /\.ts(x?)$/,
                include: /src/,
                exclude: /node_modules/,
                use:     {
                    loader: 'ts-loader',
                },
            },
            {
                enforce: 'pre',
                test:    /\.js$/,
                loader:  'source-map-loader',
                exclude: [ nodeModulePath('') ],
            },
        ],
    },
});

