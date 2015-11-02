if (Meteor.isClient) {
  // This code only runs on the client
db.ideas.insert({ content: "Yesterday 1", rank: 0, date: new Date(new Date().setDate(new Date().getDate()-1)).valueOf() });
db.ideas.insert({ content: "Yesterday 2", rank: 0, date: new Date(new Date().setDate(new Date().getDate()-1)).valueOf() });
db.ideas.insert({ content: "Yesterday 3", rank: 0, date: new Date(new Date().setDate(new Date().getDate()-1)).valueOf() });
db.ideas.insert({ content: "Yesterday 4", rank: 0, date: new Date(new Date().setDate(new Date().getDate()-1)).valueOf() });
db.ideas.insert({ content: "Yesterday 5", rank: 0, date: new Date(new Date().setDate(new Date().getDate()-1)).valueOf() });
db.ideas.insert({ content: "Yesterday 6", rank: 0, date: new Date(new Date().setDate(new Date().getDate()-1)).valueOf() });
db.ideas.insert({ content: "Yesterday 7", rank: 0, date: new Date(new Date().setDate(new Date().getDate()-1)).valueOf() });
db.ideas.insert({ content: "Yesterday 8", rank: 0, date: new Date(new Date().setDate(new Date().getDate()-1)).valueOf() });
db.ideas.insert({ content: "Yesterday 9", rank: 0, date: new Date(new Date().setDate(new Date().getDate()-1)).valueOf() });
db.ideas.insert({ content: "Yesterday 10", rank: 0, date: new Date(new Date().setDate(new Date().getDate()-1)).valueOf() });


db.ideas.insert({ content: "Today 1", rank: 0, date: new Date(new Date().setDate(new Date().getDate())).valueOf() });
db.ideas.insert({ content: "Today 2", rank: 0, date: new Date(new Date().setDate(new Date().getDate())).valueOf() });
db.ideas.insert({ content: "Today 3", rank: 0, date: new Date(new Date().setDate(new Date().getDate())).valueOf() });
db.ideas.insert({ content: "Today 4", rank: 0, date: new Date(new Date().setDate(new Date().getDate())).valueOf() });
db.ideas.insert({ content: "Today 5", rank: 0, date: new Date(new Date().setDate(new Date().getDate())).valueOf() });
db.ideas.insert({ content: "Today 6", rank: 0, date: new Date(new Date().setDate(new Date().getDate())).valueOf() });
db.ideas.insert({ content: "Today 7", rank: 0, date: new Date(new Date().setDate(new Date().getDate())).valueOf() });
db.ideas.insert({ content: "Today 8", rank: 0, date: new Date(new Date().setDate(new Date().getDate())).valueOf() });
db.ideas.insert({ content: "Today 9", rank: 0, date: new Date(new Date().setDate(new Date().getDate())).valueOf() });
db.ideas.insert({ content: "Today 10", rank: 0, date: new Date(new Date().setDate(new Date().getDate())).valueOf() });


db.subscribers.insert({ name: "Today 10", email: "noob@email.com", date: new Date(new Date().setDate(new Date().getDate())).valueOf() });

}


