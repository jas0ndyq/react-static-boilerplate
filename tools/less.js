const fs = require('fs');
const less = require('less');
const path = require('path');
const task = require('./task');

const theme = {
  'primary-color':'#2980cc',
  'link-color': '#006ACC',
  'border-radius-base': '4px'  
};

const lessPath = './node_modules/antd/dist/antd.less';
const outPath = './src/static/css/antd.css';
const lessOption = {
  relativeUrls: true,
  paths: ['./node_modules/antd/lib/'],
  modifyVars: theme,
  javascriptEnabled: true,
  ieCompat: true
}

const lessInfo = fs.readFileSync(lessPath, 'utf-8');

module.exports = task('less', () => {
  return new Promise((resolve, reject) => {
    less.render(lessInfo, lessOption)
    .then(res => {
      fs.writeFileSync(outPath, res.css, 'utf-8');
      console.log('write ok!');
      resolve();
    })
    .catch(err => {
      console.error(err);
      reject(err);
    })
  })
})
