const page1Reducer = (
  state = {
    pageCount: 0,
    pageStatus: false,
  }, 
  action
) => {
  if (action.type == 'ADD_COUNT') {
    if (action.payload.value && action.payload.value == 0) {
      return state;
    }
    else if (action.payload.value && action.payload.value >= 0) {
      return {
        pageCount: state.pageCount + action.payload.value,
        pageStatus: false,
      };
    }
  }
  else {
    return state;
  }
};

export default page1Reducer;