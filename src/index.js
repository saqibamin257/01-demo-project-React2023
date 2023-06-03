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
 import React from "react";
 import  ReactDOM  from "react-dom";

class Counter extends React.Component
{
  constructor(props)
  {
    super(props);
    console.log(this.props);
  }
  state={count:0};
  increaseCount=()=>{
    this.setState({count:this.state.count+1});
  }
  decreaseCount =()=>{
    this.setState({count:this.state.count-1});
  }

  render(){
    return <div>
    <button onClick={this.increaseCount}>Increment Count</button>
    <button onClick={this.decreaseCount}>Decrement Count</button>
    <p><label>Count:{this.state.count}</label></p>
    </div>
  }
}
const element =<Counter/>
ReactDOM.render(element,document.getElementById('root'));

//#endregion



