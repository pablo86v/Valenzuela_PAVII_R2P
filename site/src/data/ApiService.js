import axios from "axios";

const API_BASE_URL = "http://localhost:3100";

const getHeaders = () => {
    return headers = { headers: { authorization: `Bearer ${localStorage.getItem("token")}` } };
}

export const API_SECTION = {
    MASCOTAS: "api/mascotas",
    TIPOS: "api/tipos",
    LOGIN: "api/login",
    USERS: "api/users"
}

export async function httpGet(apiSection) {
    const { data } = await axios.get(`${API_BASE_URL}/${apiSection}`, getHeaders());
    return data;
}

export async function httpGetOne(apiSection, id) {
    const { data } = await axios.get(`${API_BASE_URL}/${apiSection}/${id}`, getHeaders());
    return data;
}

export async function httpPost(apiSection, bodyData) {
    const { data } = await axios.post(`${API_BASE_URL}/${apiSection}`, bodyData, getHeaders());
    return data;
}

export async function httpPut(apiSection, id, bodyData) {
    const { data } = await axios.put(`${API_BASE_URL}/${apiSection}/${id}`, bodyData, getHeaders());
    return data;
}

export async function httpDelete(apiSection, id) {
    const { data } = await axios.delete(`${API_BASE_URL}/${apiSection}/${id}`, getHeaders());
    return data;
}