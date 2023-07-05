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
// import React from "react";
// import ReactDOM  from "react-dom/client";
// import reportWebVitals from './reportWebVitals';

// const employeeContext = React.createContext();

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       data:
//       {
//         Id:1,
//         Name:'Saqib',
//         Location:'Karachi',
//         Salary:15000
//       }       
//     };
//   }  
//   changeEmployeeData=()=>{
//     this.setState({data:{Id:102}});
//   }
//   render(){  
//     return<div>      
//       <h3>Welcome to App Component</h3>      
//       <p><label>Employee Id:{this.state.data.Id}</label></p>      
//       <employeeContext.Provider value={this.state.data}>
//       <Employee></Employee>
//       </employeeContext.Provider>
//       <button onClick={this.changeEmployeeData}>Change Id</button>      
//     </div>
//   }
// }

// class Employee extends React.Component{
// static contextType  = employeeContext;
  
//   render(){    
//     return<div>      
//       <h3>Welcome to Employee Component</h3>      
//       <p><label>Employee Id:{this.context.Id}</label></p>      
//       <Salary/>
//     </div>
//   }
// }

// class Salary extends React.Component{
//   static contextType = employeeContext;
//   render(){
//     return<div>
//       <h3>Welcome to Salary Component</h3>
//       <p><label>Employee Id:{this.context.Id}</label></p>      
//     </div>
//   }
// }

// const element = <App></App>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// reportWebVitals();

//#endregion

//Example-8 Context-2 change state from child by calling function from child to parent
//Pass info from child to parent.
//#region Context-2 Call function from child to parent.

// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";

// const EmployeeContext=React.createContext({
//   data:'',
//   changeEmployeeInfo:()=>{}
// });


// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       data:{
//         Id:1,
//         Name:"Saqib Amin",
//         Location:"Birmingham",
//         Salary:50000
//       },
//       changeEmployeeInfo:this.updateEmployee
//     }
//   }
//   updateEmployee=()=>{
//     this.setState({data:{Id:200,Name:"Mr Saqib Amin"}});
//   }

//   render(){
//     return<div>
//       <h3>Welcome to App Component</h3>
//       <p>
//         <label>Employee Id:{this.state.data.Id}</label>
//       </p>
//       <p>
//         <label>Employee Name:{this.state.data.Name}</label>
//         </p>
//       <EmployeeContext.Provider value={this.state}>
//         <Employee></Employee>
//       </EmployeeContext.Provider>
//     </div>
//   }
// }

// class Employee extends React.Component{
//   static contextType = EmployeeContext;
//   render(){
//     return<div>
//       <h3>Welcome to Employee Component</h3>
//       <p>
//         <label>Employee ID:{this.context.data.Id}</label>
//         </p>
//         <p>
//         <label>Employee Name:{this.context.data.Name}</label>
//         </p>
//         <button onClick={this.context.changeEmployeeInfo}>Update Employee Id</button>
//     </div>
//   }
// }

// const element = <App></App>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// reportWebVitals();


//#endregion


//Example-9 Map function and iteration
//#region Map Function 
// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";


// function Employees(props){
//   return<div style={{border:"3px solid red"}}>
//     <p>
//       <label><b>Employee Id:{props.data.Id}</b></label>
//     </p>
//     <p>
//       <label><b>Employee Name:{props.data.Name}</b></label>
//     </p>
//     <p>
//       <label><b>Location:{props.data.Location}</b></label>
//     </p>
//     <p>
//       <label><b>Salary:{props.data.Salary}</b></label>
//     </p>
//   </div>
// }

// function DisplayEmployees(props){
//   const empList=props.employeeList;
//   const listElements =empList.map( (emp) =>
//         <Employees key={emp.Id} data={emp}></Employees>
//   );
//   return(
//     <div>
//       {listElements}
//     </div>
//   );
// }

// const EmployeeData =[
//   {Id:"1",Name:"saqib",Location:"Karachi",Salary:4000},
//   {Id:"2",Name:"anwar",Location:"Lahore",Salary:3000},
//   {Id:"3",Name:"akram",Location:"Islamabad",Salary:2000},
// ]
// const element = <DisplayEmployees employeeList={EmployeeData}></DisplayEmployees>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// reportWebVitals();
//#endregion

//Example-10 Calling Rest API
//#region Calling Rest API 
// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";

// class EmployeeComponent extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       employees:[]
//     }
//   }
//   componentDidMount(){
//     fetch("http://localhost:7037/api/employee")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             employees: result
//           });
//         }
//       );
//   };

//   render(){
//     return (
//       <div>
//         <h2>Employees Data...</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Name</th>
//               <th>Location</th>
//               <th>Salary</th>
//             </tr>
//           </thead>
//           <tbody>
//           {this.state.employees.map(emp => (
//             <tr key={emp.employeeId}>
//               <td>{emp.employeeId}</td>
//               <td>{emp.name}</td>
//               <td>{emp.location}</td>
//               <td>{emp.salary}</td>
//               </tr>
//   ))}      
//           </tbody>
//         </table>
//       </div>
//       );
//   }
// }

// const element =<EmployeeComponent></EmployeeComponent>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// reportWebVitals();
//#endregion

//Example-10 Sending POST Request
//#region Sending Post Request 
// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";

// class EmployeeComponent extends React.Component{
//   constructor(props){
//     super(props);
    
//     this.state={
//       message:"",
//       name:"",
//       location:"",
//       salary:0      
//      };
//   }  

//   onCreateEmployee =()=>
//   {
//     let employee={
//       employeeId:0,      
//       name:this.state.name,
//       location:this.state.location,
//       salary:parseInt(this.state.salary)
//     };
     
//     console.log(employee);
//     fetch('http://localhost:7037/api/Employee',{
//       method: 'POST',
//       headers:{'Content-type':'application/json'},
//         body: JSON.stringify(employee)
//     }).then(r=>r.json()).then(res=>{
//       if(res){
//         console.log(res);
//         this.setState({message:'New Employee is Created Successfully'});
//       }
//     });
//   }  

//   render(){
//     return(
//       <div>
//         <h2>Please Enter Employee Details To Add...</h2>        
//         <p>          
//           <label>Employee Name : <input type="text" onChange={e=>this.setState({name:e.target.value})} ></input></label>          
//         </p>
//         <p>
//           <label>Employee Location : <input type="text" onChange={e=>this.setState({location:e.target.value})}></input></label>
//         </p>
//         <p>
//           <label>Employee Salary : <input type="text" onChange={e=>this.setState({salary:e.target.value})}></input></label>
//         </p>
//         <button onClick={this.onCreateEmployee}>Create</button>
//         <p>
//           <label>{this.state.message}</label>
//         </p>
//       </div>
//     );
//   }
// }
// const element =<EmployeeComponent></EmployeeComponent>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// reportWebVitals();
//#endregion

//Exe-11
// #region Exe-11- SpreadOperator-Keep State Of All Controls 
// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";

// class Employee extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       employee:{
//         id:'',
//         name:'',
//         location:'',
//         salary:''
//       }
//     }
//   }
//   changeHandler=(e)=>{
//     const name = e.target.name;
//     const value=e.target.value;
//     this.setState(
//       {
//         employee:{...this.state.employee,
//         [name]:value
//       }}
//     );
//   }
//   onCreateEmployee=()=>{
//     console.log(this.state.employee);
//   }



//   render(){
//     return(
//       <div>
//         <p>
//         <label>EmployeeId:<input type="text" name="id" value={this.state.employee.id} onChange={this.changeHandler}></input></label>
//         </p>
//         <p>
//         <label>Name:<input type="text" name="name" value={this.state.employee.name} onChange={this.changeHandler}></input></label>
//         </p>
//         <p>
//         <label>Location:<input type="text" name="location" value={this.state.employee.location} onChange={this.changeHandler}></input></label>
//         </p>
//         <p>
//         <label>Salary:<input type="text" name="salary" value={this.state.employee.salary} onChange={this.changeHandler}></input></label>
//         </p>
//         <p>
//           <button onClick={this.onCreateEmployee}>CreateEmployee</button>
//         </p>        
//       </div>
//     );
//   }  
// }
// const element=<Employee></Employee>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// reportWebVitals();
//#endregion


//#region Exe-12- Formic Controls 

// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import {useFormik } from 'formik';
// import reportWebVitals from "./reportWebVitals";

//  const SignupForm = () => { 
//   const formik = useFormik({ 
//     initialValues: {
//       name:"",
//       location:"", 
//       email: "", 
//       salary:""
//     }, 
//     onSubmit: (values) => { 
//       alert(JSON.stringify(values, null,2)); 
//     },
//   });
  
//   return ( 
//     <form onSubmit={formik.handleSubmit}>
//       <p>
//       <label htmlFor="name">Name :</label> 
//       <input 
//         id="name" 
//         name="name" 
//         type="text" 
//         onChange={formik.handleChange} 
//         value={formik.values.name} 
//       />
//       </p>
//       <p>
//       <label htmlFor="name">Location :</label> 
//       <input 
//         id="location" 
//         name="location" 
//         type="text" 
//         onChange={formik.handleChange} 
//         value={formik.values.location} 
//       />
//       </p>      
//       <p>
//       <label htmlFor="email">Email Address :</label> 
//       <input 
//         id="email" 
//         name="email" 
//         type="email" 
//         onChange={formik.handleChange} 
//         value={formik.values.email} 
//       />
//       </p>
//       <p>
//       <label htmlFor="name">Salary :</label> 
//       <input 
//         id="salary" 
//         name="salary" 
//         type="text" 
//         onChange={formik.handleChange} 
//         value={formik.values.salary} 
//       />
//       </p>        
//       <button type="submit">Submit</button>        
//     </form> 
//   ); 
// }; 

// const element=<SignupForm/>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// reportWebVitals();
//#endregion

// //Exe-13 form validation using formik
// //Employee Name: 1.Required 2. MaxLength 20 Characters
// //Employee Location 1. Required
// //Employee Email ID  1. Required 2. Email Pattern 
//#region FormValidation using formik
// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import {useFormik } from 'formik';
// import reportWebVitals from "./reportWebVitals";

// //validation function
// const validateEmployee = (empData) =>
// {
//   const errors={};
//   if(!empData.name)
//   {
//     errors.name="Please enter employee name";
//   }
//   else if(empData.name.length >20)
//   {
//     errors.name="Name can not exceed 20 characters"
//   }
//   if(!empData.location)
//   {
//     errors.location="Please enter location."
//   }
//   if(!empData.salary)
//   {
//     errors.salary ="Please enter salary."
//   }
//   if(!empData.email)
//   {
//     errors.email="Please enter email."
//   }
//   else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.email)) {
//     errors.email = 'Invalid email address';
//   }
//   return errors;
// };

//  const SignupForm = () => { 
//   const formik = useFormik({ 
//     initialValues: {
//       name:"",
//       location:"", 
//       email: "", 
//       salary:""
//     }, 
//     onSubmit: (values) => { 
//       alert(JSON.stringify(values, null,2)); 
//     },
//     validate:validateEmployee,
//   });
  
//   return ( 
//     <form onSubmit={formik.handleSubmit}>
//       <p>
//       <label htmlFor="name">Name :</label> 
//       <input 
//         id="name" 
//         name="name" 
//         type="text" 
//         onChange={formik.handleChange} 
//         value={formik.values.name}
//         onBlur={formik.handleBlur} 
//       />      
//       {formik.touched.name && formik.errors.name? <span style={{color:'red'}}>{formik.errors.name}</span>:null}
//       </p>
//       <p>
//       <label htmlFor="name">Location :</label> 
//       <input 
//         id="location" 
//         name="location" 
//         type="text" 
//         onChange={formik.handleChange} 
//         value={formik.values.location} 
//         onBlur={formik.handleBlur}
//       />
//       {formik.touched.location && formik.errors.location?<span style={{color:'red'}}>{formik.errors.location}</span>:null}
//       </p>      
//       <p>
//       <label htmlFor="email">Email Address :</label> 
//       <input 
//         id="email" 
//         name="email" 
//         type="email" 
//         onChange={formik.handleChange} 
//         value={formik.values.email}
//         onBlur={formik.handleBlur} 
//       />
//       {formik.touched.email && formik.errors.email?<span style={{color:'red'}}>{formik.errors.email}</span>:null}
//       </p>
//       <p>
//       <label htmlFor="name">Salary :</label> 
//       <input 
//         id="salary" 
//         name="salary" 
//         type="text" 
//         onChange={formik.handleChange} 
//         value={formik.values.salary}
//         onBlur={formik.handleBlur} 
//       />
//       {formik.touched.salary && formik.errors.salary?<span style={{color:'red'}}>{formik.errors.salary}</span>:null}
//       </p>        
//       <button type="submit">Submit</button>        
//     </form> 
//   ); 
// }; 

// const element=<SignupForm/>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// reportWebVitals();
//#endregion


//Exe-14 form validation using Yup library
//use formik.getFieldProps to shorten the code, no need to use onChange, value, onBlur
//#region FormValidation using formik
// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import {useFormik } from 'formik';
// import * as yup from 'yup';
// import reportWebVitals from "./reportWebVitals";

//  const SignupForm = () => { 
//   const formik = useFormik({ 
//     initialValues: {
//       name:"",
//       location:"", 
//       email: "", 
//       salary:""
//     }, 
//     onSubmit: (values) => { 
//       alert(JSON.stringify(values, null,2)); 
//     },
//     validationSchema:yup.object({
//       name:yup.string().max(20,'name should not exceed 20 characters')
//       .required('Please enter employee name'),

//       location:yup.string().required('Please enter location'),

//       email:yup.string().required('Please enter email id')
//             .email('Invalid email address'),
      
//       salary:yup.string().required('Please enter salary'),
//     }),
    
//   });
  
//   return ( 
//     <form onSubmit={formik.handleSubmit}>
//       <p>
//       <label htmlFor="name">Name :</label> 
//       <input name="name" type="text" {...formik.getFieldProps("name")} />      
//       {formik.touched.name && formik.errors.name? <span style={{color:'red'}}>{formik.errors.name}</span>:null}
//       </p>
//       <p>
//       <label htmlFor="name">Location :</label> 
//       <input name="location" type="text" {...formik.getFieldProps("location")} />
//       {formik.touched.location && formik.errors.location?<span style={{color:'red'}}>{formik.errors.location}</span>:null}
//       </p>      
//       <p>
//       <label htmlFor="email">Email Address :</label> 
//       <input name="email" type="email" {...formik.getFieldProps("email")} />
//       {formik.touched.email && formik.errors.email?<span style={{color:'red'}}>{formik.errors.email}</span>:null}
//       </p>
//       <p>
//       <label htmlFor="name">Salary :</label> 
//       <input name="salary" type="text" {...formik.getFieldProps("salary")} />
//       {formik.touched.salary && formik.errors.salary?<span style={{color:'red'}}>{formik.errors.salary}</span>:null}
//       </p>        
//       <button type="submit">Submit</button>        
//     </form> 
//   ); 
// }; 

// const element=<SignupForm/>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// reportWebVitals();
//#endregion

//Exe-15 form validation using Formik built in Components
//#region FormValidation using formik
// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// import reportWebVitals from "./reportWebVitals";


//  const SignupForm = () => { 
//   return (
//     <Formik initialValues={{
//       Id: '',

//       Name: '',

//       Location: '',

//       Salary:'',

//       EmailId:'',

//       Designation:''
//     }}
//     validationSchema={yup.object({

//       Name:yup.string().max(20,'Name should not exceed 20 Characters')

//       .required('Please Enter Employee Name'),

//       Location: yup.string()

//         .required('Please Enter Employee Location'),

//       EmailId: yup.string()

//         .email('Invalid email address')

//         .required('Please Enter Email Id'),
      
//       Designation: yup.number().required('Please select a employee designation.')

//     })} onSubmit= {values => {
//       alert(JSON.stringify(values));
//     }}    
//     >
//       {(props) => (
//       <div>
//         <h2>Enter Employee Details ...</h2>
//         <Form>
//           <p>
//             <label htmlFor="Id">Employee Id</label>
//             <Field name="Id" type="text"></Field>
//           </p>
          
//           <p>
//             <label htmlFor="Name">Employee Name</label>
//             <Field name="Name" type="text"></Field>
//             <ErrorMessage name="Name"></ErrorMessage>
//           </p>
          
//           <p>
//           <label htmlFor="EmailId">Employee Email ID </label>
//           <Field name="EmailId" type="text"></Field>
//           <ErrorMessage name="EmailId"></ErrorMessage>
//           </p>
          
//           <p>
//                 <label>Employee Designation : </label>
//                 <Field name = "Designation" as = "select">
//                   <option value="">--Select Designation--</option>
//                   <option value = "1">Software Engineer</option>
//                   <option value = "2">Senior Software Engineer</option>
//                   <option value = "3">Lead</option>
//                 </Field>
//                 <ErrorMessage name = "Designation"></ErrorMessage>
//           </p>
//           <button type="submit" disabled={!props.isValid}>Submit</button>
//         </Form>
//       </div>)}
//     </Formik>
//   ); 
// }
// const element=<SignupForm/>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// reportWebVitals();
//#endregion

//#region Exe-16 Lifting Up State
// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";

// class Order extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={Qty:'',Address:'',ProductName:'--Select--'}
//   }
  
//   orderInfoChange=(val)=>{
//     this.setState({Qty:val});
//   }

//   addressChange=(val)=>{
//     this.setState({Address:val});
//   }
//   productNameChange=(val)=>{
//     this.setState({ProductName:val});
//   }

//   orderDetails=()=>{
//     let text = `Qty: ${this.state.Qty}, Address:${this.state.Address}, ProductName:${this.state.ProductName}`;
//     alert(text);
//   }

//   render(){
//     return(<div>
//       <h2>Product Order</h2>
//       <ProductInfo Qty={this.state.Qty} onQuantityChange={this.orderInfoChange} onProductNameChange={this.productNameChange}/>
//       <AddressInfo Address={this.state.Address} onAddressChange={this.addressChange}/>
//       <SummaryInfo Qty={this.state.Qty}
//        Address={this.state.Address}
//        ProductName={this.state.ProductName}
//        onQtyChange={this.orderInfoChange}
//        showOrderDetails={this.orderDetails}/>
//     </div>);
//   }
// }

// class ProductInfo extends React.Component{
//   handleChange=(e)=>{
//     this.props.onQuantityChange(e.target.value)
//   }

//   ProductNameChange=(e)=>{
//     this.props.onProductNameChange(e.target.value);
//   }


//   render(){
//     return(<div style={{border:'px solid red'}}>
//       <h2>Product Information ...</h2>
//       <p>
//         <label>Product Name:
//           <select onChange={this.ProductNameChange}>
//             <option value="--Select--">--Select--</option>
//             <option value="Product-1">Product-1</option>
//             <option value="Product-2">Product-2</option>
//             <option value="Product-3">Product-3</option>
//           </select>
//         </label>       
//       </p>
//       <p>
//         <label>Enter Qty:
//           <input type="text" value={this.props.Qty} name="quantity" onChange={this.handleChange}></input>
//         </label>
//       </p>
//     </div>)
//   }
// }

// class AddressInfo extends React.Component{
  
//   handleChange=(e)=>{
//     this.props.onAddressChange(e.target.value)

//   }
//   render(){
//     return(<div style={{border:'1px solid red'}}>
//       <h2>Address Information</h2>
//       <label>Address: <input type="text" name="address" onChange={this.handleChange}></input></label>
//     </div>);
//   }
// }

// class SummaryInfo extends React.Component{
//   SummaryQtyChange=(e)=>{
//     this.props.onQtyChange(e.target.value)
//   }
//   showOrder=()=>{
//     this.props.showOrderDetails();
//   }

//   render(){
//     return(<div style={{border:'1px solid red'}}>
//       <h2>Summary Info</h2>
//       <p>
//         <label>Product Name:{this.props.ProductName}</label>        
//       </p>
//       <p>
//         <label>Enter Qty:<input type="text" name="summaryQty" value={this.props.Qty} onChange={this.SummaryQtyChange}></input></label>
//       </p>
//       <p>
//         <label>Address:<input type="text" name="summaryAddress" value={this.props.Address}></input></label>
//       </p>
//       <p>
//         <button onClick={this.showOrder}>Place Order</button>
//       </p>
//     </div>);
//   }
// }

// const element=<Order/>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// reportWebVitals();
//#endregion


//Exe-17(a) Ref - UseCase-1: create textbox,button and alert message, by using ref increment the input value.
// In this way we can avoid rerendring again and again which happens if we keep the change the value using state.
// because on every state change component re renders.
//#region 
// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";

// class QuantityIncrement extends React.Component{
//   constructor(props){
//     super(props);
//     this.quantityRef=React.createRef();
//   }

//   incrementQuantity=()=>{
//     this.quantityRef.current.value++;
//   }

//   render(){
//     alert('Welcome React');
//     return(
//     <div>
//       <p>
//         <label>Enter Quantity:<input type="text" ref={this.quantityRef}></input></label>
//         <button onClick={this.incrementQuantity}>+</button>
//       </p>

//     </div>);
//   }
// }
// const element=<QuantityIncrement/>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// reportWebVitals();
//#endregion

//#region 17(b) Create Login Form, with bydefault focus on UserName input.
// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";

// class Login extends React.Component{
//   constructor(props){
//     super(props);
//     this.userNameRef=React.createRef();    
//   }

//   componentDidMount(){
//     this.userNameRef.current.focus();
//   }

//   render(){
//     return(
//     <div>
//       <p>
//         <label>UserName:<input type="text" ref={this.userNameRef}></input></label>        
//       </p>
//       <p>
//         <label>Password:<input type="text"></input></label>        
//       </p>
//       <button>Login</button>

//     </div>);
//   }
// }
// const element=<Login/>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// reportWebVitals();
//#endregion


//#region 17(c) Create video player, with play and pause buttons.
// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import video from '../src/video/Algorithms.mp4';
// import reportWebVitals from "./reportWebVitals";

// class VideoPlayer extends React.Component{
//   constructor(props){
//     super(props);
//     this.videoRef=React.createRef();    
//   }  
//   playVideo=()=>{
//     this.videoRef.current.play();
//   }

//   pauseVideo=()=>{
//     this.videoRef.current.pause();
//   }

//   render(){
//     return(
//     <div>
//       <video ref={this.videoRef} width="300" height="200" controls>
//       <source src={video} type="video/mp4"></source>
//       </video>
//       <div>
//       <button onClick={this.playVideo}>play</button>
//       <button onClick={this.pauseVideo}>pause</button>
//       </div>      
//     </div>);
//   }
// }
// const element=<VideoPlayer/>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// reportWebVitals();
//#endregion

//#region Exe-18 Ref-Part-2 Ref Forwarding.
//Pass Parent component ref to child component by using innerRef.
//click on Summary Component's Elevator Name paragraph, and shift focus on Elevator component's Name Input field.
// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";

// class Elevator extends React.Component{
//   constructor(props){
//     super(props);
//     this.elevatorRef=React.createRef();
//   }  
  
//   render(){
//     return(
//     <div>
//         <h2>Welcome to Elevator Ordering Screen...</h2>
//         <p>
//           <label>Elevator Name : <input ref={this.elevatorRef} type="text"></input></label>
//         </p>

//         <p>
//           <label>Elevator Speed : <input type="text"></input></label>
//         </p>

//         <p>
//           <label>Elevator Load : <input type="text"></input></label>
//         </p>
//         <SummaryRef innerRef={this.elevatorRef}></SummaryRef>
//     </div>);
//   }
// }

// class SummaryRef extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   focusInput=()=>{
//     this.props.innerRef.current.focus();
//   }
//   render() {
//     return (<div>
//       <h2>Summary Details...</h2>
//       <p onClick={this.focusInput}>
//         <label>Elevator Name : <b>Name - 1</b></label>
//       </p>

//       <p>
//         <label>Elevator Speed : <b>10 m/s</b></label>
//       </p>

//       <p>
//         <label>Elevator Load : <b>550 Kg</b></label>
//       </p>
//     </div>
//     );
//   }
// }



// const element=<Elevator />
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// reportWebVitals();
//#endregion

//#region Exe-19 Ref in functional components.
// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";
// function TestComponent(){
  
//   let testRef=null;
//   function handleClick(){
//     testRef.focus();
//   }

//   return(
//     <div>
//       <input type="text" ref={e=>testRef=e}></input>
//       <input type="button" value="Focus the textbox" onClick={handleClick}/>
//     </div>
//   );
// }
// const element=TestComponent();
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// reportWebVitals();
//#endregion

//#region Exe-20 FrowardRef in functional components.
//we can not attach ref to input fields i functional components, for that we have 2options.
//(a) convert function component to class component or (b) use ForwardRef technique.
// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";

// const DemoComponent = React.forwardRef((props,ref) => {
  
//   function testClick(){
//     ref.current.focus();
//   }
//   return(
//     <button onClick={testClick}>Click-DemoComponent</button>
//   );
// })
// class Elevator extends React.Component{
//   constructor(props){
//     super(props);
//     this.elevatorRef=React.createRef();
//   }  
  
//   render(){
//     return(
//     <div>
//         <h2>Welcome to Elevator Ordering Screen...</h2>
//         <p>
//           <label>Elevator Name : <input ref={this.elevatorRef} type="text"></input></label>
//         </p>

//         <p>
//           <label>Elevator Speed : <input type="text"></input></label>
//         </p>

//         <p>
//           <label>Elevator Load : <input type="text"></input></label>
//         </p>
//         <SummaryRef innerRef={this.elevatorRef}></SummaryRef>
//         <DemoComponent ref={this.elevatorRef}></DemoComponent>
//     </div>);
//   }
// }

// class SummaryRef extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   focusInput=()=>{
//     this.props.innerRef.current.focus();
//   }
//   render() {
//     return (<div>
//       <h2>Summary Details...</h2>
//       <p onClick={this.focusInput}>
//         <label>Elevator Name : <b>Name - 1</b></label>
//       </p>

//       <p>
//         <label>Elevator Speed : <b>10 m/s</b></label>
//       </p>

//       <p>
//         <label>Elevator Load : <b>550 Kg</b></label>
//       </p>
//     </div>
//     );
//   }
// }

// const element=<Elevator></Elevator>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// reportWebVitals();
//#endregion


//#region Exe-21 Higher Order Function.
// create admin dashboard, with Employee Report, Department Report and PRoject Report Components.
// create dynamic and reusable component to fetch and render data from API for employee and dept.

// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";

// function reportsHOC(InputComponent,inputData){
//   return class extends React.Component{
//     constructor(props){
//       super(props);
//       this.state={
//         data:[],
//         columns:inputData.columns, //for columns name
//         header:inputData.header //for heading
//       };
//     }
//     componentDidMount(){
//       fetch(inputData.Url)
//       .then(res=>res.json())
//       .then(
//         (result) =>{
//           this.setState({data:result});          
//         });
//     }
//     render(){
//       return(
//         <Data data={this.state}></Data>
//       );
//     }
//   }
// }

// class Data extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(<div>
//       <h2>{this.props.data.header}</h2>
//       <table>
//         <thead>
//           <tr>
//             {this.props.data.columns.map(c=>(
//               <th>{c}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>          
//           {this.props.data.data.map(r =>(                                    
//             <tr key={r.Id}>
//               {this.props.data.columns.map(c=>(
//                 <td>{r[c]}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>)
//   }
// }

// class Reports extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//     <div>
//     </div>
//     );
//   }
// }

// const EmployeeReports = reportsHOC(Reports,
//   {Url:'http://localhost:7037/api/Employee',
//    columns:['employeeId','name','location','salary'],
//    header:'Employee Data'});

//    const DeptReports = reportsHOC(Reports,
//     {Url:'http://localhost:7037/api/department',
//      columns:['departmentId','departmentName','revenue'],
//      header:'Department Data'});



// class AdminDashboard extends React.Component{
//   constructor(props){
//     super(props);    
//   }
//   render(){
//     return(
//       <>
//       <EmployeeReports></EmployeeReports>
//       <DeptReports></DeptReports>
//       </>
//     );
//   }
// }

// const element=<AdminDashboard></AdminDashboard>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// reportWebVitals();
//#endregion

//#region  Exe-22 - Portals in React
// Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import { createPortal } from 'react-dom';
// import reportWebVitals from "./reportWebVitals";

// class Employee extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       employees:[],
//       showModal:false    
//     }    
//   }

//   componentDidMount() {
//     fetch("http://localhost:7037/api/Employee")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             employees: result
//           });
//         }
//       );
//   }
//   editEmployee=()=>{
//      this.setState({showModal:!this.state.showModal});
//   }

//   render(){
//     return(
//       <div>
//         <h2>Employee Data ...</h2>
//         <table>
//           <thead>
//           <tr>
//             <th>Employee Id</th>
//             <th>Name</th>           
//             <th>Location</th>
//             <th>Salary</th>
//             <th>Actions</th>                                            
//           </tr>
//           </thead>
//           <tbody>
//           {this.state.employees.map( (emp)=>(
//             <tr key={emp.employeeId}>
//               <td>{emp.employeeId}</td>
//               <td>{emp.name}</td>
//               <td>{emp.location}</td>
//               <td>{emp.salary}</td>
//               <td>
//               <button onClick={this.editEmployee}>Edit</button> 
//               <Modal open={this.state.showModal} close={this.editEmployee}>
//               <EmployeeModal employee={emp}></EmployeeModal>
//               </Modal>              
//               </td>
//             </tr>
//           ))}
//           </tbody>          
//         </table>
//       </div>
//     );
//   }
// }

// class Modal extends React.Component{
//   constructor(props){
//     super(props);
//   }

//   render(){
//     return(
//       this.props.open?createPortal(
//         <div className="modal">
//           <button onClick={this.props.close}>X</button>
//           {this.props.children}
//         </div>,document.body):null
//       );
//   }
// }

// class EmployeeModal extends React.Component{
//   constructor(props){
//     super(props);
//   }

//   render(){
//     console.log(this.props);
//     return(
//        <div>

//         <h2>Employee Details...</h2>
//         <p>
//           <label>Employee ID : <input type="text" value={this.props.employee.employeeId}></input></label>
//         </p>

//         <p>
//           <label>Employee Name : <input type="text" value={this.props.employee.name}></input></label>
//         </p>

//         <p>
//           <label>Employee Location : <input type="text" value={this.props.employee.location}></input></label>
//         </p>

//         <p>
//           <label>Employee Salary : <input type="text" value={this.props.employee.salary}></input></label>
//         </p>

//         <input type="submit" value="Save"></input>
//       </div>
//     );
//    }
// }
// const element=<Employee></Employee>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// reportWebVitals();
//#endregion


//#region  Exe-23 - Profiler in React
// Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

// import React, { Profiler } from "react";
// import  ReactDOM  from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";

// class NewAccountsReports extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       FromDate:'',
//       ToDate:''
//     };
//   }
//   handleChange=(e)=>{
//     let name=e.target.name;
//     let value=e.target.value;
    
//     this.setState({
//       [name]:value
//     });
//   }


//   render(){
//     return(
//     <div>
//       <h2>Welcome to New Account Report Component...</h2>
//       <p>
//         <label>From Date: <input type="text" name="FromDate" onChange={this.handleChange} value={this.state.FromDate}></input></label>
//       </p>

//       <p>
//         <label>To Date: <input type="text" name="ToDate" onChange={this.handleChange} value={this.state.ToDate}></input></label>
//       </p>
//       <input type="submit" value="Generate"></input>
//     </div>
//     );
//   }
// }

// class LoansRepaymentReports extends React.Component{

//   constructor(props){
//     super(props);
//   }



//   render(){
//     return(
//       <div>
//         <h2>Welcome to Loans Repayment Reports Component...</h2>
//       </div>
//     );
//   }
// }

// class ReportsDashboard extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   callbackFunction=(id,phase,actualDuration,baseDuration, startTime,
//     commitTime, interaction) => {
//       console.log('Id is : '+id+', Phase is : '+phase);
//       console.log('Actual Duration is : '+actualDuration+' and Base Duration is :'+
//       baseDuration);
//   }

//   render(){
//     return(
//     <>
//     <h2>Welcome to Report Dashboard ...</h2>
//     <Profiler id="newAccountProfiler" onRender={this.callbackFunction}>
//     <NewAccountsReports/>
//     </Profiler>
//     <Profiler id="loadRepaymentReports" onRender={this.callbackFunction}>
//     <LoansRepaymentReports/>
//     </Profiler>    
//     </>
//     );
//   }
// }

// const element=<ReportsDashboard></ReportsDashboard>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// reportWebVitals();
//#endregion

//#region  Exe-24 - Render Props in React

// import React  from "react";
// import  ReactDOM  from "react-dom/client";
// import reportWebVitals from "./reportWebVitals"; 

// class Department extends React.Component{

//   constructor(props){
//     super(props);
//     this.state={
//       list:['Dev','Big Data','Mobility']
//     };
//   }

//   render(){
//     return(
//       <div>
//         <h2>Department List...</h2>
//         <ul>
//           {this.state.list.map(d=>(
//             <li key={d}>{d}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// class Project extends React.Component{
//   constructor(props){
//     super(props);    
//   }

//   render(){
//     return(
//       <div>
//         <h2>Projects List...</h2>
//         <ul>
//           {this.props.list.map(d=>(
//             <li key={d}>{d}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// class Page extends React.Component{
//   constructor(props){
//     super(props);
//   }

//   render(){
//     return(
//       <React.Fragment>
//         <Department></Department>
//         <Project list={['P-1','P-2','P-3']}></Project>
//       </React.Fragment>
//     )
//   }
// }

// const element=<Page></Page>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// reportWebVitals();

//#endregion

//------------------Functional Components------------------------//

//#region  Exe-26 - use State in React


import React,{useState}  from "react";
import  ReactDOM  from "react-dom/client";
import reportWebVitals from "./reportWebVitals"; 

function Employee()
{
  const[name,setName]=useState('');
  
  function changeName(e){
    setName(e.target.value);
  }

  return(
    <div>
      <h2>Welcome to Employee Functional Component</h2>
      <p>
        <label>
          Employee Name:<input type="text" value={name} onChange={changeName}/>
        </label>
      </p>
      <p>
        <label>Name:{name}</label>
      </p>
    </div>
  )
}
const element=<Employee></Employee>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
reportWebVitals();

//#endregion

