/*
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author Krishna zSharma
 * @license MIT
 *
 */

class EasyHTTP {
  async get(url) {
    const reponse = await fetch(url);
    const resData = await reponse.json();
    return resData;
  }

  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }

  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }
  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    });
    const resData = await "Resource Deleted";
    return resData;
  }
}
