// webpack.config.js

export const resolve = {
    fallback: {
        "stream": require.resolve("stream-browserify")
       
    }
};
    