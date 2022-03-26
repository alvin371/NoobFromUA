import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyB31QvUEcxKz868IV-s58GMDF8_8vBqFlI",
    authDomain: "java-agro.firebaseapp.com",
    projectId: "java-agro",
    storageBucket: "java-agro.appspot.com",
    messagingSenderId: "846776963606",
    appId: "1:846776963606:web:0826feec21f07be6869b37",
    measurementId: "G-XM23HRGRP8"
};


export const app = initializeApp(firebaseConfig)
export const storage = getStorage()
