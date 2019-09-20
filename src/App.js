import React, { Component } from 'react';
import CourseForm from './components/Courseform.js';
import CourseList from './components/Courselists.js';
import './App.css'
class App extends Component {
  state = { 
    courses:[
      {name:'HTML'},
      {name:'CSS'},
      {name:'JQuery'}
    ] , 
    current:''
   }
  //UpdateCourse
  updateCourse= (e) =>{
    this.setState({
      current:e.target.value
    })
  }

  //addCourse
  addCourse= (e)=>{
    e.preventDefault();
    let current=this.state.current;
    let courses=this.state.courses;
    courses.push({name:current});
    this.setState({
      courses:courses,
      current:''
    })
  }
  //DeleteCourse
  deleteCourse=(index)=>{
    //console.log(index);
   let courses=this.state.courses;
   courses.splice(index,1);
   this.setState({
     courses:courses
   })
    
  }
  //editCourse
  editCourse = (index,value) => {
    let courses=this.state.courses;
    let course =courses[index];
    course['name']=value;
    this.setState({
      courses
    })
  }
  render() { 
    const {courses}=this.state;
    const courseList = courses.map((course,index)=>{
      return <CourseList details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
    })
    return ( 
      <section className="App">
       <h2>Add Courses</h2>
       <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current}/>
       <ul>{courseList}</ul>
      </section>
     );
  }
}
 
export default App;