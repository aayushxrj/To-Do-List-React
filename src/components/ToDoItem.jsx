import React, {useState} from "react";



function ToDoItem(props) {

    const [isDone, setIsDone] = React.useState(false);
    function handleClick() {
        setIsDone((prevValue) =>{
            return !prevValue;
        });
    }
    return (
        // <div onClick={handleClick}>
        <div onClick={ () => {
            props.onChecked(props.id);
        }}>
            {/* <li style={{textDecoration: isDone ? "line-through" : "none"}}>{props.text}</li> */}
            <li>{props.text}</li>
        </div>
    );
}

export default ToDoItem;
