var jpg = require('./lu.jpg')

import style from './index.scss'

var dom = document.getElementById("root")
var img = new Image()
img.src = jpg
img.classList.add(style.avator)
dom.append(img)