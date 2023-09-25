import axios from "axios";

export const api = axios.create({
    //  Execução de requisições de forma local em sua maquina
    //   baseURL: "http://localhost:3333",

    //  Execução de requisições para o servidor web
    baseURL: "https://upload-ai-server-vakr.onrender.com",
});