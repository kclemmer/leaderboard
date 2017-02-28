console.log("Hello world");

PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
  // this code only runs on the client
  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find();
    },
  });

  Template.leaderboard.events({
    'click .player': function(){
      console.log("You clicked a .player element");
    }
  });
}

if(Meteor.isServer){
  // this code only runs on the server
}