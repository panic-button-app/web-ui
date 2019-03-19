const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
module.exports = withSass(withTypescript({
    env: {
        REACT_APP_FIREBASE_API_KEY: process.env.REACT_APP_FIREBASE_API_KEY,
        REACT_APP_FIREBASE_DOMAIN: process.env.REACT_APP_FIREBASE_DOMAIN,
        REACT_APP_FIREBASE_DATABASE: process.env.REACT_APP_FIREBASE_DATABASE,
        REACT_APP_FIREBASE_PROJECT_ID: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        REACT_APP_FIREBASE_STORAGE_BUCKET: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        REACT_APP_FIREBASE_SENDER_ID: process.env.REACT_APP_FIREBASE_SENDER_ID,
    },
}))