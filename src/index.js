//Example-1 Functional Components - pass parameters and render
//#region Example-1 Functional Components
// Pass parameter properties to components.


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const Employee=(data)=>
// {
// return <div>
// <p>Name: {data.name}</p>
// <p>Salary: {data.salary}</p>
// <Department deptName={data.deptName} head={data.head} />
// </div>;  
// }

// const Department =(deptInfo) =>
// {
// return<div>
//   <p>Dept Name: {deptInfo.deptName}</p>
//   <p>Head: {deptInfo.head}</p>
// </div>;
// }

// const element = <Employee name="saqib" salary="2500$" deptName="IT" head="HEAD"/>
// ReactDOM.render(element,document.getElementById('root'));
//#endregion

//Example-2 Class Component - Pass Parameter and render.
// #region Example-2 Class Component

// import React from "react";
// import  ReactDOM  from "react-dom";

// class Employee extends React.Component{
//   constructor(props){
//     super(props);
//     console.log(this.props);
//     //this.props.Name="Amjad"; //cant change the props value as properties are read only in react
//   }

//   render(){
//     return <div>
//      <h1>Employee Details ...</h1>
//      <p>
//       <label>Name:<b>{this.props.EmployeeName}</b></label>
//       </p>
//       <Department Name={this.props.DeptName} />
//     </div>
//   }
// }

// class Department extends React.Component
// {
//   render(){
//     return<div>
//       <p>
//         <label>Dept.Name:<b>{this.props.Name}</b></label>
//       </p>
//     </div>
//   }
// }

// const element = <Employee EmployeeName="Saqib" DeptName="Accounts"/>

// ReactDOM.render(element,document.getElementById('root'));

//#endregion

//Example-3 State in Class Components
//#region State in 
// import React from "react";
// import  ReactDOM  from "react-dom";

// class Employee extends React.Component {
//   state={counter:0};

//   addEmployee = () => {
//       this.setState({counter:this.state.counter+1});
//   }
//   render() {
//     return <div>
//         <h2>Employee Component...</h2>
//         <button onClick={this.addEmployee}>Add Employee</button>        
//         <p><label>Add Employee button is clicked {this.state.counter} times</label></p>
//     </div>
//   }
// }

// const element1=<Employee></Employee>
// ReactDOM.render(element1,document.getElementById("root"));


//#endregion

//Example-4 State in Class Component, Create 2 buttons for incremement and decrement counter.
//#region Increment Decrement Counter
//  import React from "react";
//  import ReactDOM from "react-dom/client";
//  import reportWebVitals from "./reportWebVitals";

// class Counter extends React.Component
// {
//   constructor(props)
//   {
//     super(props);
//     console.log(this.props);
//   }
//   state={count:0};
//   increaseCount=()=>{
//     this.setState({count:this.state.count+1});
//   }
//   decreaseCount =()=>{
//     this.setState({count:this.state.count-1});
//   }

//   render(){
//     return <div>
//     <button onClick={this.increaseCount}>Increment Count</button>
//     <button onClick={this.decreaseCount}>Decrement Count</button>
//     <p><label>Count:{this.state.count}</label></p>
//     </div>
//   }
// }
// const element =<Counter/>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   element
// );

// reportWebVitals();



//#endregion

//Example-5: Message characters count.
//#region Message characters count
//  import React from "react";
//  import ReactDOM from "react-dom/client";
//  import reportWebVitals from "./reportWebVitals";

//  class MessageCharactersCount extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={wordsCounter:0};
//   }
//   //state={wordsCounter:0} we can declare state here also without constructor.
//   onMessageChange=(text)=>{
//     this.setState({wordsCounter:text.length});
//   }
//   render(){
//     return<div>
//       <h3>Welcome to Characters Count</h3>
//       <label>Enter Text</label>
//       <textarea onChange={e=>this.onMessageChange(e.target.value)}></textarea>
//       <p><label>Total Characters are:{this.state.wordsCounter}</label></p>
//     </div>
//   }
//  }
//  const element = <MessageCharactersCount/>
//  const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(element);
//  reportWebVitals();
//#endregion

//Example-6: Interaction between Components in React
//Pass data from parent to child and child to parent
//#region Pass data from parent to child and child to parent
// import React from "react";
// import ReactDOM from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";

// class Employee extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={updatedSalary:null}
//   }

//   getUpdatedSalary = (salary) => {
//     this.setState({updatedSalary:salary});
//     }
//   render(){
//     return<div>
//       <h3>Employee Details ...</h3>
//       <p>
//         <label>Id:<b>{this.props.Id}</b></label>
//       </p>
//       <p>
//         <label>Name:<b>{this.props.Name}</b></label>
//       </p>
//       <p>
//         <label>Location:<b>{this.props.Location}</b></label>
//       </p>
//       <p>
//         <label>Total Salary:<b>{this.props.TotalSalary}</b></label>
//       </p>
//       <p>
//         <label>Updated Salary : <b>{this.state.updatedSalary}</b></label>
//       </p>
//       <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA} SpecialAllowance={this.props.SpecialAllowance}
//        onSalaryChanged={this.getUpdatedSalary}/>
//        {/* getUpdatedSalary is Parent function */}
       
//     </div>
//   }
// }

// class Salary extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       basic:this.props.BasicSalary,
//       hra:this.props.HRA,
//       sa:this.props.SpecialAllowance
//     };
//   }
  
//   updateSalary =()=>{
//     let salary = parseInt(this.state.basic) + parseInt(this.state.hra)+ parseInt(this.state.sa);
//     this.props.onSalaryChanged(salary); //callback event which pass to parent component
//     console.log("updated salary child component="+salary);
//   }

//   render(){
//     return<div>
//       <h3>Salary Details</h3>
//       <p>
//         <label>Basic Salary:<input type="text" defaultValue={this.state.basic} onChange={e=>this.setState({basic:e.target.value})}/></label>
//       </p>
//       <p>
//         <label>HRA:<input type="text" defaultValue={this.state.hra} onChange={e=>this.setState({hra:e.target.value})} /></label>
//       </p>
//       <p>
//         <label>Special Allowance:<input type="text" defaultValue={this.state.sa} onChange={e=>this.setState({sa:e.target.value})} /></label>
//       </p>
//       <button onClick={this.updateSalary}>Update Salary</button>      
//     </div>
//   }
// }

// const element=<Employee Id="1" Name="Saqib" Location="Karachi"
//                TotalSalary="3000" BasicSalary="3000" HRA="1000" SpecialAllowance="5000"/>
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// reportWebVitals();
//#endregion

//Example-7: Pass parameters using Context
//#region Context-1
import React from "react";
import ReactDOM  from "react-dom/client";
import reportWebVitals from './reportWebVitals';

const employeeContext = React.createContext();

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:
      {
        Id:1,
        Name:'Saqib',
        Location:'Karachi',
        Salary:15000
      }       
    };
  }  
  changeEmployeeData=()=>{
    this.setState({data:{Id:102}});
  }
  render(){  
    return<div>      
      <h3>Welcome to App Component</h3>      
      <p><label>Employee Id:{this.state.data.Id}</label></p>      
      <employeeContext.Provider value={this.state.data}>
      <Employee></Employee>
      </employeeContext.Provider>
      <button onClick={this.changeEmployeeData}>Change Id</button>      
    </div>
  }
}

class Employee extends React.Component{
static contextType  = employeeContext;
  
  render(){    
    return<div>      
      <h3>Welcome to Employee Component</h3>      
      <p><label>Employee Id:{this.context.Id}</label></p>      
      <Salary/>
    </div>
  }
}

class Salary extends React.Component{
  static contextType = employeeContext;
  render(){
    return<div>
      <h3>Welcome to Salary Component</h3>
      <p><label>Employee Id:{this.context.Id}</label></p>      
    </div>
  }
}

const element = <App></App>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
reportWebVitals();

//#endregion


