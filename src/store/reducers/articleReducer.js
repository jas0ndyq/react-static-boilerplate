const testReducer = (state = {
  isFetching: false,
  invalidate: false,
  lastUpdated: null,
  list: [],
}, action) => {
  if (action.type == 'FETCH_POSTS') {
    if (action.payload.status == 'error') {
      return state;
    }
    else if (action.payload.status == 'success') {
      return {
        isFetching: false,
        invalidate: false,
        lastUpdated: +new Date(),
        list: action.payload.list
      };
    }
    else if (action.payload.status == 'doing') {
      return {
        isFetching: true,
        invalidate: false,
        lastUpdated: state.lastUpdated,
        list: state.list
      };
    }
  }
  else {
    return state;
  }
};

export default testReducer;