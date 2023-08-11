import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": true,
  },
  timeout: 10000,
});

function setToken(token) {
  console.log(token);
  instance.defaults.headers.common["Authorization"] = `Barer ${token}`;
}

export { instance, setToken };
