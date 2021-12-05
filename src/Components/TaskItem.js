import React from 'react'
import { ListGroup } from 'react-bootstrap'

function TaskItem({task , taskStatut ,clickedItem , clickedItemStatue}) {
    return (

        <div className="todo">
            { taskStatut === true ? 
          <div>  
            <button onClick={clickedItemStatue}>Complete</button> 
            <button  onClick={clickedItem} >Delete</button>
          <span> {task}</span>
          </div>
            
            :
            <ListGroup.Item >
              <button onClick={clickedItemStatue} >Undo</button>  
              <button  onClick={clickedItem} >Delete</button>
              <span > <strike> {task} </strike></span>
            </ListGroup.Item>
          } 
          </div>      
    )
} 

//

export default TaskItem
