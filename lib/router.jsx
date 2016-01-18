FlowRouter.route('/', {
  name: 'index',
  action: function() {
    renderLayout(<Home />);
  }
});

renderLayout = function(main) {
  return ReactLayout.render(App, {
    header: <Header />,
    main: main,
    footer: <Footer />
  });
};