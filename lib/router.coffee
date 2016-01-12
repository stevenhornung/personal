FlowRouter.route '/',
  name: 'root',
  action: ->
    BlazeLayout.render 'layout', {header: 'header', main: 'home'}