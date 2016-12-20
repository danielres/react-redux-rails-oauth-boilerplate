import config from '../config.js'
import axios from 'axios'


export const fetchItems = (parent) => {
  axios.get(`${config.API_ENDPOINT}/items`)
    .then((response) => {
        parent.setState({
          ...parent.state,
          items: {
            ...parent.state.items,
            data: response.data,
            loading: false
          }
        })
      })
    .catch((error) => console.log(error))
}


export const updateInputValue = (parent, e) =>
  parent.setState({...parent.state, inputValue: e.target.value})


export const submitNew = (parent, e) => {
  const setPosition = () => Math.max(...parent.state.items.data.map((i) => i.position)) + 1
  const setId = () => Math.max(...parent.state.items.data.map((i) => i.id)) + 1
  e.preventDefault()
  if(parent.state.inputValue.length === 0) return
  axios.post(`${config.API_ENDPOINT}/items`, {
    id: setId(),
    name: parent.state.inputValue,
    position: setPosition(),
    completed: false
  })
  .then((response) => {
    parent.setState({
      ...parent.state,
      inputValue: '',
      items: {
        ...parent.state.items,
        data: [
          ...parent.state.items.data,
          response.data
        ]
      }
    })
  })
  .catch((error) => console.log(error))
}


export const toggleCompleted = (parent, item) => {
  axios.put(`${config.API_ENDPOINT}/items/${item.id}`,
      {...item, completed: !item.completed}
    )
    .then((response) => {
      parent.setState({
        ...parent.state,
        items: {
          ...parent.state.items,
          data:
            parent.state.items.data.map((i) =>
              i.id === response.data.id ? response.data : i
          )
        }
      })
    })
    .catch((error) => console.log(error))
}


export const destroyItem = (parent, item) => {
  axios.delete(`${config.API_ENDPOINT}/items/${item.id}`)
    .then((response) => {
      parent.setState({
        ...parent.state,
        items: {
          ...parent.state.items,
          data: parent.state.items.data.filter((item)=> item.id !== response.data.id )
        }
      })
    })
    .catch((error) => console.log(error))
}
