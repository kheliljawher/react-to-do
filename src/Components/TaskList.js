import React from 'react'
import { ListGroup } from 'react-bootstrap'
import TaskItem from './TaskItem'

  function TaskList({listItem , clickedItem , clickedItemStatue}) {
    return (
        <div className="app">
            <ListGroup>
            {listItem.map((i)=>(
                 
                 <TaskItem
                     key = {i.id} 
                     task  = {i.name}
                     taskStatut = {i.statue}
                    clickedItemStatue = {()=>clickedItemStatue(i.id)}
                     clickedItem = {()=>clickedItem(i.id)} 
                 />
                 ))} 
       </ListGroup>
        </div>
    )
}
export default TaskList
