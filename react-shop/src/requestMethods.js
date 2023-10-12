// import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjNkOWRjOTgwMmQ3ZmViMjUwOGY3YyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2OTY4NDg1MDMsImV4cCI6MTY5NzEwNzcwM30.CXFElBwXTlb7G5toIj2W8Jhr0YSgpKX0pkxak1TOlS8";

// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// });
// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   header: { token: `Bearer ${TOKEN}` },
// });

import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
