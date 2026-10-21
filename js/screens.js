const Screens = {
  list: {},
  current: null,

  // Register a screen: a name plus the HTML to show
  add(name, html) {
    this.list[name] = html;
  },

  // Switch to a screen by name
  show(name) {
    this.current = name;
    game.innerHTML = this.list[name];
  }
};
