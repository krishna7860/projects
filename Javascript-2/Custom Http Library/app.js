const http = new easyHTTP();
// Create data

const data = {
  title: "custompost",
  body: "this is a custom post"
};

// Get Post
http.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// Get Single Post

http.get("https://jsonplaceholder.typicode.com/posts/1", function(err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// Add new Data
http.post("https://jsonplaceholder.typicode.com/posts", data, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// Delete post
http.delete("https://jsonplaceholder.typicode.com/posts/1", function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});

// Update Data
http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});
