import './App.css';
import { useState } from 'react';

function App() {
  const [inputList, setInpList] = useState("");
  const [arr, createList] = useState([]);

  const itemEvent = (e) => {
    setInpList(e.target.value)
  }



  const addItems = () => {
    createList((oldlist) => {
      return [...oldlist, inputList]
    })
  }


  let deleteAll = () => {
    createList((oldlist) => {
      return []

    })
  }

  let editVal = (e) => {
    let ind = e.target.value
    let newVal = prompt('Edit task', arr[ind])
    createList((oldlist) => {
      let a = [...oldlist]
      a[ind] = newVal
      return [...a]
    })

  }



  let deleteVal = (e) => {
    let ind = e.target.value
    createList((oldlist) => {
      return oldlist.filter((arrItems, index) => {
        return index != ind;
      })
    })
  }


  return (

    <>
      <div className="App">

        <input type='text' onChange={itemEvent} className='inputField' placeholder='Enter task' />
        <button className='addBtn' onClick={addItems}>Add</button>

        <ul>{arr.map((item, index) => {
          return <li className='listItems' key={'li' + index} ><span>{item}</span> <div><button value={index} className='editBtn' onClick={editVal} >Edit</button> <button value={index} className='deleteBtn' onClick={deleteVal}>Delete</button></div></li>
        })}
        </ul>

        <button className='deleteAll' onClick={deleteAll} >Delete All</button>

      </div>
    </>

  );
}

export default App;
