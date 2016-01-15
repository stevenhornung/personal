FlowRouter.route '/',
  name: 'root',
  action: ->
    BlazeLayout.render 'layout', {main: 'home'}

FlowRouter.route '/notFound',
  name: 'notFound',
  action: (params) ->
    BlazeLayout.render 'layout', {main: '404'}