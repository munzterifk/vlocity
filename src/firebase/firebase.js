import * as firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBlpooA4Ptc3u3Gj0Iz1L6KGJCZp9AJ7M8",
    authDomain: "recipe-b4b3a.firebaseapp.com",
    databaseURL: "https://recipe-b4b3a.firebaseio.com",
    projectId: "recipe-b4b3a",
    storageBucket: "recipe-b4b3a.appspot.com",
    messagingSenderId: "561348728860",
    appId: "1:561348728860:web:edc7034020cf2bb4f367d9",
    measurementId: "G-CGK7JKQ7KC"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref('recipes').on('value', (snapshot)=> {
    const val = snapshot.val();
}, (e)=> {
    throw new Error(e);
});



// database.ref().once('value')
// .then(snapshot=>{
//     const val = snapshot.val()
//     console.log(val);
// })
// .catch(e=>console.log('Error', e))


// Update stuffs
// const dataIndexOf = data.recipes.findIndex(recipe => recipe.uuid === 'e80ea521-4d42-48fe-a7a6-ac8952bc0de4');

