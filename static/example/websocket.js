const ws = new WebSocket('wss://obscure-waters-98157.herokuapp.com', ['soap', 'xmpp'])

// When the ws is open, send some data to the server
ws.onopen = () => {
  ws.send('Ping') // Send the message 'Ping' to the server
}

// Log errors
ws.onerror = (error) => {
  console.log(`WebSocket Error ${error}`)
}

// Log messages from the server
ws.onmessage = (e) => {
  console.log(`Server: ${e.data}`)
}
