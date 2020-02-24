const http = new EasyHTTP();

// get News
http
  .get(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=559bd7665e714a68a19a387a44432dee"
  )
  .then(data => console.log(data))
  .catch(err => console.log(err));

// // Send Data to Server

// const data = {
//   name: "John Doe",
//   username: "Joshname",
//   email: "jsogn@gmail.com"
// };

// // http
// //   .post("https://jsonplaceholder.typicode.com/users", data)
// //   .then(data => console.log(data))
// //   .catch(err => console.error());

// http
//   .put("https://jsonplaceholder.typicode.com/users/2", data)
//   .then(data => console.log(data))
//   .catch(err => console.error());
// http
//   .delete("https://jsonplaceholder.typicode.com/users/2", data)
//   .then(data => console.log(data))
//   .catch(err => console.error());
