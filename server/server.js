if(Meteor.isServer){
  //Empty Messages collection adds a system message to the collection
  if(Messages.find({}).count() === 0){
    Messages.insert({
      body: 'Welcome to MeteorChat',
      sentBy: 'System',
      createdAt: new Date()
    });
  }

}
