const theme = {
  color: {
    primaryColor: '#FF385C',
    secondaryColor: '#00848A'
  },
  textColor: {
    primaryColor: '#222222',
    secondaryColor: '#484848'
  },
  borderColor: '#cdcdcd',
  mixin: {
    boxShadow: `
    transition: box-shadow 200ms ease;
    &:hover {
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    }`
  }
}

export default theme