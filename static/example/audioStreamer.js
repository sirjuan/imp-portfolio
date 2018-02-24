const makeCreatePerson = () => {
  let i = 0
  return (name) => {
    const id = i
    i += 1
    return {
      getName: () => name,
      getId: () => id,
    }
  }
}
const createPerson = makeCreatePerson()


const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PERSON': return [createPerson(action.payload.name), ...state]
    case 'DELETE_PERSON': return state.filter(person => person.getId() !== action.payload.id)
    case 'INIT': return action.payload.names.map(name => createPerson(name))
    default: return state
  }
}


const makePersonModel = () => {
  let state = []
  const components = []

  const update = () => components.forEach(component => component(state))

  return {
    dispatch: (action) => {
      state = reducer(state, action)
      const names = JSON.stringify(state.map(person => person.getName()))
      localStorage.setItem('names', names)
      update(state)
    },
    connect: component => components.push(component),
  }
}
const { dispatch, connect } = makePersonModel()


const addPerson = name => name.length && dispatch({ type: 'ADD_PERSON', payload: { name } })
const deletePerson = id => dispatch({ type: 'DELETE_PERSON', payload: { id } })


const createRemoveButton = (id) => {
  const removeButton = document.createElement('button')
  removeButton.appendChild(document.createTextNode('X'))
  removeButton.onclick = () => deletePerson(id)
  return removeButton
}

const createNameElement = (name) => {
  const personName = document.createElement('span')
  personName.appendChild(document.createTextNode(name))
  return personName
}

const createPersonElement = (person) => {
  const personElement = document.createElement('div')
  personElement.appendChild(createNameElement(person.getName()))
  personElement.appendChild(createRemoveButton(person.getId()))
  return personElement
}


const clearList = children => children.forEach(child => child.remove())

const addPersons = (personList, persons) => persons.forEach(person => (
  personList.appendChild(createPersonElement(person))
))


const PersonList = (persons) => {
  const personList = document.getElementById('person-list')
  const children = [...personList.childNodes]
  clearList(children)
  addPersons(personList, persons)
}


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('person-form')
  const input = document.getElementById('name-input')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = new FormData(form)
    const person = data.get('person')
    addPerson(person)
    input.value = ''
    input.focus()
  })
  input.focus()
})


connect(PersonList);

(() => {
  const names = JSON.parse(localStorage.getItem('names'))
  dispatch({ type: 'INIT', payload: { names } })
})()
