FlowRouter.route '/',
  name: 'root',
  action: ->
    console.log 'blah'
    BlazeLayout.render 'layout', {main: 'home'}

FlowRouter.route '/notFound',
  name: 'notFound',
  action: (params) ->
    BlazeLayout.render 'layout', {main: '404'}