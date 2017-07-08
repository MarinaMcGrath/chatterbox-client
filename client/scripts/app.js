
let app = {
  init: function() {

  },
  server: 'http://parse.opspark.hackreactor.com/chatterbox/classes/messages',  
  send: function(message) {
    $.ajax({
      url: app.server, 
      type: 'POST',
      data: JSON.stringify(message)
    });
  },
  fetch: function() {
    $.ajax({
      url: app.server,
      type: 'GET',
      success: function(data) {
        data.results.forEach(e => {
          app.renderMessage(e);
        });
      }
    });
  },
  clearMessages: function() {
    $('#chats').empty();
  },
  handleUsernameClick: function() {    
    if (!app.friends.includes(this.id)) {
      app.friends.push(this.id);
    }    
  },
  friends: [],
  renderMessage: function(message) {
    let name = message.username;
    let text = message.text;    
    $('#chats').append(`<div id = ${name} class = "username">${name}: ${text} </div>`);
  },

  renderRoom: function(room) {
    $('#roomSelect').append('<div>room</div>');
  }
};

$(document).ready(function() {
  app.fetch();
  $('#chats').on('click', '.username', app.handleUsernameClick);

});

