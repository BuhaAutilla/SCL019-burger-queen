// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD9yYYwNfOGuswuxY5o4i_klAKZPQFoDW0",
  authDomain: "burger-queen-scl019.firebaseapp.com",
  projectId: "burger-queen-scl019",
  storageBucket: "burger-queen-scl019.appspot.com",
  messagingSenderId: "559013408161",
  appId: "1:559013408161:web:8455c58e1aa1be50beafe0",
  measurementId: "G-7KPFY3FHFW"
};
let db = getFirestore();

export const firebaseInit = () => {
    initializeApp(firebaseConfig);
    db = getFirestore();
}

export const Chef = await addDoc(collection(db, "Pedidos"), {
    client: '',
    waiter: '',
    pedido: [],
    estado: 'false',
    tiempo: '',
    total: 0
});

export default firebaseConfig;