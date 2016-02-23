onEnter = function(ctx, redirect) {
  currentRouteName = FlowRouter.getRouteName();

  Meteor.setTimeout(function() {
    return analytics.page({
      label: currentRouteName,
      title: currentRouteName
    });
  });
}

FlowRouter.triggers.enter([onEnter])

FlowRouter.route('/', {
  name: 'home',
  action: function() {
    renderLayout(<Home />);
  }
});

FlowRouter.notFound =
  triggersEnter: [function(context, redirect) {
    redirect('home')
  }]

renderLayout = function(main) {
  return ReactLayout.render(App, {
    header: <Header />,
    main: main,
    footer: <Footer />
  });
};