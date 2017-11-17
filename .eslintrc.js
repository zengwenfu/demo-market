module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "vue"],
    "plugins": ["vue"],
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": "2017"
    },
    "globals": {
        Vue: false,
        DEV: false,
        ENV: false
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        // "linebreak-style": [
        //     "error",
        //     "unix"
        // ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
