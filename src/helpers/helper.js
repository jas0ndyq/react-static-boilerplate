import { notification, message } from 'antd';

const checkWidth = () => {
  const width = document.body.clientWidth;
  return width < 920 ? 'Mobile' : 'PC';
};

const checkIe = () => {
  var win = window;
  var doc = win.document;
  var input = doc.createElement('input');
  

  //"!win.ActiveXObject" is evaluated to true in IE11
  if (win.ActiveXObject === undefined) return null;
  if (!win.XMLHttpRequest) return 6;
  if (!doc.querySelector) return 7;
  if (!doc.addEventListener) return 8;
  if (!win.atob) return 9;
  //"!doc.body.dataset" is faster but the body is null when the DOM is not
  //ready. Anyway, an input tag needs to be created to check if IE is being
  //emulated
  if (!input.dataset) return 10;
  return 11;
};

const callToast = (msg, type) => {
  const device = checkWidth();
  if (device == 'PC') {
    notification[type]({
      message: msg,
    });
  }
  else if (device == 'Mobile') {
    message[type](msg);
  }
};

const serveGuid = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

const scrollSmw = (height) => {
  const _ch = document.documentElement.scrollTop;
  const _step = _ch >= height ? -30 : 30; 
  let scrolldelay;
  let prevSy = 0;
  function backTop () {
    if (prevSy == window.scrollY && prevSy != 0) {
      clearTimeout(scrolldelay);
      return;
    }
    prevSy = window.scrollY;
    window.scrollBy(0, _step);
    scrolldelay = setTimeout(backTop, 10);
  
    var sTop = document.documentElement.scrollTop + document.body.scrollTop;
    if (_ch >= height) {
      if (sTop <= height) {
        clearTimeout(scrolldelay);
      }
    }
    else {
      if (sTop >= height) {
        clearTimeout(scrolldelay);
      }      
    }
  }
  backTop();
};

const addZero = (input) => {
  if (+input < 10) {
    input = '0' + input;
  }
  return input;
};

const formatDateFull = (input) => {
  const _date = new Date(input);
  return _date.getFullYear() + '-'
        + addZero(_date.getMonth() + 1) + '-'
        + addZero(_date.getDate())
        + ' ' + addZero(_date.getHours()) + ':'
        + ' ' + addZero(_date.getMinutes()) + ':'
        + ' ' + addZero(_date.getSeconds());
};

const handleHistory = (type) => {
  let historyType;
  switch (type) {
  case 'liter':
    historyType = 'HISTORY_LITERATURE';
    break;
  case 'professor':
    historyType = 'HISTORY_PROFESSOR';
    break;
  default:
    break;
  }
  return {
    getList () {
      let list = [];
      if (!historyType) {
        return list;
      }
      if (window.localStorage.getItem(historyType)) {
        list = JSON.parse(window.localStorage.getItem(historyType)) || [];
      }
      return list;
    },
    setList (item) {
      let list = this.getList();
      if (!historyType) {
        return list;
      }
      let newItem = {
        list: item,
        timestamp: formatDateFull(new Date())
      };
      list.unshift(newItem);
      if (list.length > 5) {
        list.length = 5;
      }
      window.localStorage.setItem(historyType, JSON.stringify(list));
      return this.getList();
    }
  };
};

const debounce = (func, wait, immediate) => {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export {
  checkWidth,
  checkIe,
  callToast,
  serveGuid,
  scrollSmw,
  handleHistory,
  debounce
};

