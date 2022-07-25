// Core
import merge from 'webpack-merge';

// Constants
import { SOURCE_DIRECTORY, BUILD_DIRECTORY } from '../constants';

// Modules
import * as modules from '../modules';

export const getCommonConfig = () => {
    return merge(
        {
            entry:  [ SOURCE_DIRECTORY ],
            output: {
                filename:   'mScript.js',
                path:       BUILD_DIRECTORY,
                publicPath: '/',
            },
            resolve: {
                extensions: [ '.ts', '.js' ],
            },
        },
        modules.loadTypeScript(),
        modules.defineEnvVariables(),
    );
};
