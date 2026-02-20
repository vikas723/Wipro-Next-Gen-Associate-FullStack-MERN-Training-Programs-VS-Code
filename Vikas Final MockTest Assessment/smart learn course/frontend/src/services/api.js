import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const fetchCourses = () => API.get("/courses");
export const enrollCourse = (data) => API.post("/enroll", data);