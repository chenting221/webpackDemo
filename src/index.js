var jpg = require('./lu.jpg')

import './index.scss'

var dom = document.getElementById("root")
var img = new Image()
img.src = jpg
img.classList.add('avator')
dom.append(img)