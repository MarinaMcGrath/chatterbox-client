// YOUR CODE HERE:


let app = {

  init: function() {

  },
  
  send: function(message) {
    $.ajax({
      url: 'http://parse.opspark.hackreactor.com', 
      type: 'POST',
      data: JSON.Stringify(message)
    });
  }
};