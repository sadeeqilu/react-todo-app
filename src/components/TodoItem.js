import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
  getStyle = () => {
    return {
      borderBottom: '1px #ccc dotted',
      padding: '10px',
      backgroundColor: '#f4f4f4',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }



  render(){
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()} >
      <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
        {' ' } { title }
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
      </p>
        </div>
    );
  }
}


TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}


export default TodoItem;
