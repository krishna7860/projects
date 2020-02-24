function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make and HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);
  this.http.onload = () => {
    if (this.http.status === 200) {
      callback(null, this.http.responseText);
    } else {
      callback("Error : " + this.http.status);
    }
  };
  this.http.send();
};

// Make and HTTP POST Request3
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");
  this.http.onload = () => {
    callback(null, this.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};
// Make and HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/json");
  this.http.onload = () => {
    callback(null, this.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

// Make and HTTP DELETE Request

easyHTTP.prototype.delete = function(url, callback) {
  this.http.open("DELETE", url, true);
  this.http.onload = () => {
    if (this.http.status === 200) {
      callback(null, "Post Deleted");
    } else {
      callback("Error : " + this.http.status);
    }
  };
  this.http.send();
};
