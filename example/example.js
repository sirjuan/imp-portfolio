const handleClick = () => {
  const button = document.getElementById('button')
  console.log('clicked!')
  if (button.classList.contains('clicked')) {
    button.classList.remove('clicked')
    button.innerHTML = 'Click Me!'
  } else {
    button.classList.add('clicked')
    button.innerHTML = 'Now Click Me Again!'
  }
}
