
let app = {
  init: function() {
    app.fetch();
    $('#chats').on('click', '.username', app.handleUsernameClick);
    $('.submit').on('click', app.handleSubmit);
    $('.submit').on('submit', app.handleSubmit);
    $('.submit #roomSubmit').on('click', () => {
      let $room = $('#room').val();
      app.addRoomOption($room);
    });
    app.user = window.location.search.slice(10);
    setInterval(function() { 
      app.fetch(); }, 1000);
  },
  server: 'http://parse.opspark.hackreactor.com/chatterbox/classes/messages',  
  send: function(message) {
    $.ajax({
      url: app.server, 
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function(data) {
      }
    });
  },
  handleSubmit: function() {
    let $val = $('#message').val();
    let msg = {
      username: app.user,
      text: $val,
      roomname: 'lobby'      
    };
    app.send(msg);
    $('#message').val('');
  },
  fetch: function() {
    $.ajax({
      url: app.server,
      type: 'GET',
      data: {order: '-createdAt'}, 
      success: function(data) { 
        app.clearMessages();
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
    if (message.text.includes('<')) {      
    } else {      
      app.addRoomOption(message.roomname);
      let name = message.username;
      let friendCheck = () => app.friends.includes(name);       
      let text = message.text;      
      $('#chats').append(`<div id = ${name} class = "msg username ${friendCheck()}">${name}: ${text} </div>`);      
    }
  },
  rooms: [],
  addRoomOption: (room) => {
    if (!app.rooms.includes(room)) {
      app.rooms.push(room);              
      $('.roomSelect').append(`<option value =${room}>${room}</option>`);
    }
  },
  renderRoom: function(room) {
   
  },
};

app.init();

