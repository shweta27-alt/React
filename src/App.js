import React,{Component} from 'react';
import './App.css';
import {Greet } from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent  from './components/ParentComponent';
import UserGreeting  from './components/UserGreeting';
import NameList  from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import LifeCycleB from './components/LifeCycleB';
import Fragments from './components/Fragments';
import PureComp from './components/PureComp';
import Rerendaring from './components/Rerendaring';
import Refs from './components/Refs'
import Apicall from './components/Apicall';
import TaskDT from './components/TaskDT';
import Data3 from './components/Data3'
import Target3 from './components/Target3';
import Pract1 from './components/Pract1'
class App extends Component{

  componentDidMount(){
    console.log("app.js mount")
  }
  render(){
    return (
      <div className="App">
        {/* <Greet name="bruce"/> */}
        {/* <Welcome name="shark"/>
        <Hello/> */}
        {/* <Message/> */}
        {/* <Counter/> */}
        {/* <FunctionClick/>
        <ClassClick/> */}
        {/* <EventBind/> */}
        {/* <ParentComponent/> */}
       {/* <UserGreeting/> */}
       {/* <NameList /> */}
       {/* <StyleSheet primary ={true}/> */}
       {/* <Inline/> */}
       {/* <Form/> */}
      {/* < LifeCycleA/> */}
      {/* < LifeCycleB/> */}
      {/* <Fragments/> */}
      {/* <PureComp/> */}
     {/* < Rerendaring/> */}
     {/* <Refs/> */}
     {/* <Apicall/> */}
     {/* <TaskDT/> */}
     {/* <Data3/> */}
     {/* <Target3/> */}
     <Pract1/>
      </div>
    );
  }
 
}

export default App;
