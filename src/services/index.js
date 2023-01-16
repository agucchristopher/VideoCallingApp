import axios from "axios";

let BaseURL = "http://192.168.43.30:8080";
export const signin = async (username, password) => {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
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
