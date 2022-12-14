module.exports = {
    compact: false,
    presets: [
        '@babel/preset-typescript',
        '@babel/preset-react',
        ['@babel/preset-env', { modules: 'commonjs', loose: true }],
    ],
    plugins: [
        '@babel/plugin-transform-modules-commonjs',
        '@babel/plugin-transform-destructuring',
        '@babel/plugin-transform-for-of',
        '@babel/plugin-transform-regenerator',
        '@babel/plugin-transform-runtime',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/plugin-proposal-object-rest-spread',
    ],
    env: {
        production: {
            compact: true,
        },
    },
};
