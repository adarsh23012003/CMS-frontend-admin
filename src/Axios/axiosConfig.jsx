import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": true,
  },
  timeout: 10000,
});

const formInstance = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    "Content-Type": "multipart/form-data",
    "ngrok-skip-browser-warning": true,
  },
  timeout: 20000,
});

function setToken(token) {
  // console.log(token);
  instance.defaults.headers.common["Authorization"] = `Barer ${token}`;
}
function setFormToken(token) {
  // console.log(token);
  formInstance.defaults.headers.common["Authorization"] = `Barer ${token}`;
}

export { instance, formInstance, setToken, setFormToken };
