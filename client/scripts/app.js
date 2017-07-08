
let app = {
  init: function() {
    app.fetch();
    $('#chats').on('click', '.username', app.handleUsernameClick);
    $('.submit').on('click', app.handleSubmit);
    $('.submit').on('submit', app.handleSubmit);
    app.user = window.location.search.slice(10);
  },
  server: 'http://parse.opspark.hackreactor.com/chatterbox/classes/messages',  
  send: function(message) {
    $.ajax({
      url: app.server, 
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function(data) {
        console.log(data);
      }
    });
  },
  handleSubmit: function() {
    let $val = $('#message').val();
    let msg = {
      username: app.user,
      text: $val,
      roomname: 'NoParents'
    };
    app.send(msg);
    $('#message').val('');

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
    $('#chats').append(`<div id = ${name} class = "msg username">${name}: ${text} </div>`);
  },

  renderRoom: function(room) {
    $('#roomSelect').append('<div>room</div>');
  },
};

app.init();

