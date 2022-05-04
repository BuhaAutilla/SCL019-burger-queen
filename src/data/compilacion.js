// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, Timestamp, getDocs } from "firebase/firestore";
// import { firebaseConfig } from ".data/firebaseConfig.js";
// import {
//     getFirestore, collection,
//     addDoc, getDocs,
//     deleteDoc, doc, updateDoc, getDoc, timeStamp
// } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyD9yYYwNfOGuswuxY5o4i_klAKZPQFoDW0",
    authDomain: "burger-queen-scl019.firebaseapp.com",
    projectId: "burger-queen-scl019",
    storageBucket: "burger-queen-scl019.appspot.com",
    messagingSenderId: "559013408161",
    appId: "1:559013408161:web:8455c58e1aa1be50beafe0",
    measurementId: "G-7KPFY3FHFW"
  };  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db);

export const guardarPedido = async (order, client, waiter) => {
    const chef = await addDoc(collection(db, "Pedidos"), {
        order,
        client,
        waiter,
        status: "Pendiente",
        createdAt: Timestamp.now(),
        total: order.reduce((total, item) => total + item.value, 0)
    });
    console.log(chef);
}

export const getTasks = () => getDocs(collection(db, "Pedidos"));

export const wallCocina = async () => {
    const querySnapshot = await getDocs(collection(db, "Pedidos"));
    const arr = [];
    querySnapshot.forEach(order => arr.push(Object.assign(order.data(), { 'id': order.id })))
    return arr;
}
