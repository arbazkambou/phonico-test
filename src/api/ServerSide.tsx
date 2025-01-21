import axios from "axios";

const ServerSide = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
});

export default ServerSide;
