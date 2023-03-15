import axios from "axios";

export const getUser = async () => {
  const Token = localStorage.getItem("Token");
  try {
    await axios
      .get("http://127.0.0.1:8000/api/auth/me/", {
        headers: {
          Authorization: "Token " + Token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(
        (res) => {
          console.log("user >>", res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
          return res.data;
        },
        (err) => console.log("err >>", err)
      );
  } catch (error) {
    console.log("error >>", error);
  }
};

export const register = async ({ username, email, password }) => {
  try {
    await axios
      .post("http://127.0.0.1:8000/api/auth/register/", {
        username,
        email,
        password,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(
        (res) => {
          console.log("data ", res.data);
          localStorage.setItem("Username", JSON.stringify(res.data.username));
          return res.data;
        },
        (error) => {
          console.log("error >>", error);
        }
      );
  } catch (error) {
    console.log("error >>", error);
  }
};

export const login = async ({ email, password }) => {
  try {
    await axios
      .post("http://127.0.0.1:8000/api/auth/login/", {
        email,
        password,
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        console.log("login data >> ", res.data);
        console.log("res.data.key > ", res.data.key);
        localStorage.setItem("Token", res.data.key);
        getUser();

        return res.data.key;
      });
  } catch (error) {
    console.log("error >> ", error);
  }
};

export const logout = async () => {
  try {
    await axios
      .post("http://127.0.0.1:8000/api/auth/logout/", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        localStorage.removeItem("Token");
        localStorage.removeItem("user");
        localStorage.clear();
        console.log("data ", res.data);
        return res.data;
      });
  } catch (error) {
    console.log("error >>", error);
  }
};
