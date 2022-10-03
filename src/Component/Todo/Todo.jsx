import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './style.css'

function Todo() {
  const getLocalData = () => {
    const list = localStorage.getItem('mytodolist')
    if (list) {
      return JSON.parse(list)
    } else {
      return []
    }
  }
  const [inputData, setInputData] = useState('')
  const [items, setItems] = useState(getLocalData())
  const [editItems,setEditItems]=useState("")
  const addItem = () => {
    if (!inputData) {
      alert('please fill data')
    } else {
      const myNewInput = {
        id: new Date().getTime().toString(),
        name: inputData,
      }
      setItems([...items, myNewInput])
      setInputData('')
    }
  }
  const deleteItem = (ElemId) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.id !== ElemId
    })
    setItems(updatedItems)
  }
  const editItem=()=>{
    
  }
  useEffect(() => {
    localStorage.setItem('mytodolist', JSON.stringify(items))
  }, [items])
  return (
    <div>
      <div className='main-div'>
        <div className='child-div'>
          <figure>
            <img src='./images/todo.svg' alt='todologo' />
            <figcaption>Add your list here ✌</figcaption>
          </figure>
          <div className='addItems'>
            <input
              type='text'
              placeholder='✍ Add items'
              className='form-control'
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i className='fa fa-plus add-btn' onClick={addItem}></i>
          </div>
          {/* show your items */}
          <div className='showItems'>
            
            {items.map((curElem, index) => {
              return (
                <div className='eachItem' key={curElem.id}>
                  <h3>{curElem.name}</h3>
                  <div className='todo-btn'>
                    <i className='far fa-edit add-btn' onClick={()=>editItem(curElem.id)}></i>
                    <i
                      className='far fa-trash-alt add-btn'
                      onClick={() => deleteItem(curElem.id)}
                    ></i>
                  </div>
                </div>
              )
            })}
          </div>
          {/* remove all button */}
          <div className='showItems'>
            <button
              className='btn effect04'
              data-sm-link-text='Remove All'
              onClick={() => setItems([])}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo
