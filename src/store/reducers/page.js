const pageReducer = (
  state = {
    mobileNav: false,
  }, 
  action
) => {
  if (action.type == 'MOBILE_NAV') {
    if (action.payload && action.payload == 'open') {
      return {
        mobileNav: true
      };
    }
    else if (action.payload && action.payload == 'close') {
      return {
        mobileNav: false
      };
    }
  }
  else {
    return state;
  }
};

export default pageReducer;