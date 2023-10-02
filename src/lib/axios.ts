import axios from "axios";

export const api = axios.create({
    //  Utilize para realizar solicitações para o servidor local em sua máquina;
    //   baseURL: "http://localhost:3333",

    //  Utilize para realizar solicitações para o servidor web;
    baseURL: "https://upload-ai-server-vakr.onrender.com",
});