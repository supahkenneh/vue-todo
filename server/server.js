require('dotenv').config();
const initializeApp = require('firebase/app').initializeApp;
const firebase = require('firebase/database');
const { get, ref, child, getDatabase } = firebase;
const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID,
    measurementId: process.env.FIREBASE_MEASUREMENTID,
    databaseURL: process.env.FIREBASE_DATABASE
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const server = express();
let db = getDatabase();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get('/tasks', (req, res) => {
    const dbRef = ref(getDatabase())
    get(child(dbRef, '/tasks'))
        .then(response => {
            if (response.exists()) {
                const responseArr = [];
                for (let x in response.val()) {
                    responseArr.push(response.val()[x]);
                }
                return res.json({ payload: responseArr });
            } else {
                return res.json({ payload: null });
            }
        })
        .catch(err => {
            console.log('error: ', err);
        })
});
// let randomId = Math.floor(Math.random() * 1000);
// firebase.set(firebase.ref(db, `/tasks/${randomId}`), {
//     id: randomId,
//     task: 'Cook dinner',
//     priority: 'High',
//     status: 'done',
// });

server.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
})