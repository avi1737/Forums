import { API_URL } from "../constant/comman";

export function callApiToServer(body, header, method, endPoint) {

  return new Promise((resolve, reject) => {
    fetch(API_URL + endPoint, {
      method: method,
      headers: header,
      body: body,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        console.log("error printed here in callApi", err);
        reject(err);
      });
  });
}

export function callGetApiToServer(header, method, endPoint) {

  return new Promise((resolve, reject) => {
    fetch(API_URL + endPoint, {
      method: method,
      headers: header,
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        console.log("error printed here in callApi", err);
        reject(err);
      });
  });
}
