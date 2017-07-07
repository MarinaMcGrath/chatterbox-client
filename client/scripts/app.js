// YOUR CODE HERE:


let app = {

  init: function() {

  },
  
  send: function(message) {
    $.ajax({
      url: 'http://parse.opspark.hackreactor.com/chatterbox/classes/message', 
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
    $('#chats').empty();
  },

  renderMessage: function(message) {
    //turn string into a DOM element
    $('#chats').append();
  },

  renderRoom: function(room) {

  }
};