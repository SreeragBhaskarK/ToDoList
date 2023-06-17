
import './App.css';
import { useState } from 'react'

function App() {
  const [toDo, setToDo] = useState('')
  const [toDos, setToDos] = useState([])
  const date = new Date()
  const dataName = date.toLocaleString('en-IN',{weekday:'long'})
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {dataName} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => { setToDo(e.target.value) }} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => { setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]) }} className="fas fa-plus"></i>
      </div>
      {toDos && toDos.map((obj, index) => {
        return (
          <div key={index} className="todos">
            <div className="todo">
              <div className="left">
                <input checked={obj.status} onChange={(e) => {
                  setToDos(
                    toDos.filter((obj2) => {
                      if (obj2.id === obj.id) {
                        obj2.status = e.target.checked
                      }
                      return obj2
                    })
                  )
                }

                } type="checkbox" name="" id="" />
               { obj.status ? <strike>{obj.text}</strike>:<p>{obj.text}</p>}
              </div>
              <div className="right">
                <i onClick={()=>{setToDos(
                  toDos.filter((obj2)=> obj.id!==obj2.id),
                )}} className="fas fa-times"></i>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
