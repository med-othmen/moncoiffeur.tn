import Axios from "axios";
export function Login(user) {
  return () =>
    Axios.post("http://localhost:4000/auth/", user, {
      withCredentials: true,
    }).then((res) => {
      if (res.data.role === "client") {
        localStorage.setItem("userid", res.data.userid);
        window.location.pathname = "/client";
      } else if (res.data.role === "pro") {
        localStorage.setItem("userid", res.data.userid);
        window.location.pathname = "/pro";
      }
    });
}
