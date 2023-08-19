import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4LKlLeZQow10R_bVFGsSU_oA_owi6GT4",
  authDomain: "chatconnect-810af.firebaseapp.com",
  projectId: "chatconnect-810af",
  storageBucket: "chatconnect-810af.appspot.com",
  messagingSenderId: "696231970870",
  appId: "1:696231970870:web:58f282f091b27d14f3b097",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const storage = getStorage();
