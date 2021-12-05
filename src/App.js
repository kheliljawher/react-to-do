
import React, { Component } from 'react'


import Header from './Components/Header';
import TaskList from './Components/TaskList';
import { v4 as uuid } from "uuid";
import { isCompositeComponent } from 'react-dom/test-utils';

 class App extends Component {
  constructor(){
    super() 
    this.state = {
      newTaskState :'' ,
     
      Did : "",
      listItem: [ {id : 0 ,
      name: "react",
      statue : true 
      }
     ] 
       
    }
    
 }
 
      clickedItem = (pid= null)=>{
        this.setState({
          ...this.state,
          Did : pid,
         listItem : this.state.listItem.filter((item)=>(
           item.id !== pid ))
           
        },()=>{console.log(this.state.Did)})
      }

      clickedItemStatue = (id = null)=>{
         
          this.setState({
            ...this.state,
            listItem : this.state.listItem.map(item=> item.id===id ? !item.statue : item.statue )
            })                
      
     } 
      clickedItemStatue = (id = null)=>{
         
          this.setState({
            ...this.state,
            listItem : this.state.listItem.map(item=> item.id===id ? {...item, statue : !item.statue} : item )
            })     
      
     } 

      handleTask = (newTaskState) => {

          this.setState({
            ...this.state,
            newTaskState , 
          
            listItem : [...this.state.listItem, { id : uuid(), name :newTaskState ,statue : true} ]
          },()=>{console.log(this.state.listItem)})
          
        }
          

      render() {
          return (
            <div>
              <Header  handleTask={this.handleTask} ></Header>
              <TaskList listItem={this.state.listItem} clickedItem={this.clickedItem} clickedItemStatue={this.clickedItemStatue}></TaskList>
              
            </div>
          )     
        }
      }
 

export default App

