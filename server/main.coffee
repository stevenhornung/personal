Meteor.startup ->
  UserStatus.events.on "connectionLogin", (fields) ->
    console.log fields