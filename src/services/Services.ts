import axios from "axios";

const api = axios.create({
    baseURL: "https://jasonplaceholder.typicode.com"
})

export const consultar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url);
    setDados(resposta.data);
}