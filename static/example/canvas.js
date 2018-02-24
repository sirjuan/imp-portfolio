let can,
  ctx,
  startX,
  startY,
  endX,
  endY,
  mouseIsDown = 0,
  lines = []

function init() {
  can = document.getElementById('canvas')
  ctx = can.getContext('2d')

  can.addEventListener('mousedown', mouseDown, false)
  can.addEventListener('mousemove', mouseXY, false)

  document.body.addEventListener('mouseup', mouseUp, false)
}


function mouseDown(e) {
  startX = e.pageX - can.offsetLeft
  startY = e.pageY - can.offsetTop
  mouseIsDown = 1
}

function mouseUp(e) {
  endX = e.pageX - can.offsetLeft
  endY = e.pageY - can.offsetTop
  lines.push({
    startX, startY, endX, endY,
  })
  mouseIsDown = 0
}

function mouseXY(e = event) {
  redrawLines()
  if (mouseIsDown) {
    endX = e.pageX - can.offsetLeft
    endY = e.pageY - can.offsetTop
    ctx.beginPath()
    ctx.moveTo(startX, startY)
    ctx.lineTo(endX, endY)
    ctx.closePath()
    ctx.stroke()
  }
}

function redrawLines() {
  ctx.clearRect(0, 0, can.width, can.height)

  lines.forEach((line) => {
    ctx.beginPath()
    ctx.moveTo(line.startX, line.startY)
    ctx.lineTo(line.endX, line.endY)
    ctx.closePath()
    ctx.stroke()
  })
}


document.addEventListener('DOMContentLoaded', () => {
  init()
})
