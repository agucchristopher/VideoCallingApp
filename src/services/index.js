import axios from "axios";

let BaseURL = "http://192.168.43.119:8080";
export const signin = async (username, password) => {
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };
  let bodyContent = JSON.stringify({
    username,
    password,
  });

  let response = await fetch(`${BaseURL}/users/signin`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.text();
  return data;
};

export const signup = async (
  username,
  password,
  first_name,
  last_name,
  email,
  country,
  gender
) => {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    first_name,
    last_name,
    email,
    username,
    country,
    gender,
    password,
  });

  let response = await fetch(`${BaseURL}/users/signup`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.text();
  return data
};
