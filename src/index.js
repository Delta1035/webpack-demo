import './index.css';
import './le.less';
import './sa.scss';
const hello = require('./hello.txt');
console.log('hi world' + hello);
const logo = require('./public/wx.png');
const img = new Image();
img.src = logo;
img.title = '来自require';
document.body.appendChild(img)

