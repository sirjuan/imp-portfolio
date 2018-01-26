const handleClick = () => {
  const button = document.getElementById('button')
  if (button.classList.contains('clicked')) {
    button.classList.remove('clicked')
    button.innerHTML = 'Click Me!'
  } else {
    button.classList.add('clicked')
    button.innerHTML = 'Now Click Me Again!'
  }
}
