module.exports = (res, next, values) => {
  res.locals = {
    title: 'D&D',
    navbutton1: values && values.navbutton1
      ? values.navbutton1
      : {
        text: 'Character Sheet',
        link: '/sheet',
      },
    navbutton2: values && values.navbutton2
      ? values.navbutton2
      : {
        text: 'Powers',
        link: '/powers',
      }
  }

  next()
}