import React, { Component,Fragment } from 'react';
class CourseList extends Component {
    state={
        isEdit:false
    }
    //render Courses Items
    renderCourse = ()=>{
     return(
        <li>
        <span>{this.props.details.name}</span>
        <button onClick={()=>{this.toggleState()}}>Edit Course</button>
        <button onClick={() => {this.props.deleteCourse(this.props.index)}}>Delete Course</button>
        </li>
     )
    }
    //toggleState
    toggleState=()=>{
    let {isEdit}=this.state;
    this.setState({
        isEdit : !isEdit
    })
    }
    updateCouseItem = (e) =>{
        e.preventDefault();
       this.props.editCourse(this.props.index , this.input.value ) 
       this.toggleState();
    }


    //render Update Form
    renderUpdateForm = () =>{
        return(
            <form onSubmit={this.updateCouseItem}>
                <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.details.name}/>
                <button>Update Course</button>
            </form>
        )
    }

    render() { 
        let {isEdit}=this.state;
        return ( 
            <div>
               <Fragment>
                {isEdit? this.renderUpdateForm(): this.renderCourse()}
               </Fragment>
            </div>
         );
    }
}
 
export default CourseList;