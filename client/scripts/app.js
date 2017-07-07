// YOUR CODE HERE:


let app = {

  init: function() {

  },
  
  send: function(message) {
    $.ajax({
      url: 'http://parse.opspark.hackreactor.com', 
      type: 'POST',
      data: JSON.stringify(message)
    });
  },

  fetch: function() {
    $.ajax({
      type: 'GET'
    });
  },

  clearMessages: function() {
    $('#chats').children()
  },

  renderMessage: function() {

  },

  renderRoom: function(room) {

  }
};