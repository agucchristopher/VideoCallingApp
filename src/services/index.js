import axios from "axios";

export const signup = async (username, password, bodyContent, headersList) => {
  let response = await fetch("http://192.168.43.30:8080/users/signin", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.text();
  return data;
};
