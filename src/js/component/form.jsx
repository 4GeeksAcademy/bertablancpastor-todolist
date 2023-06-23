import React, { useState } from "react";
import { useEffect } from "react";


//create your first component
const Form = () => {

    const [tarea, setTarea] = useState("")
    const [tareas, setTareas] = useState([])
    const [borrar, setBorrar] = useState("")

    const handleTarea = (e) => {
        e.preventDefault()
        setTarea(e.target.value)
    }

    const pushTarea = () => {
        //Spread operator
        if (tarea != "") {
            setTareas([...tareas, tarea])
            setTarea("")
        } else {
            alert("Debe rellenar la tarea")
        }
    }

    const borrarTarea = () => {
        if (tarea === setTarea)
        setBorrar("text-decoration-line-through")
    }



    return (
        <div className="container bg-warning-subtle">
            <div className="">
                <p className="fs-2">TODOS</p>
            </div>
            <form>
                <div className="mb-3">
                    <input type="text" onChange={handleTarea} className="form-control" id="form2" placeholder="Write a todo" value={tarea} />
                </div>
            </form>
            <button type="button" onClick={pushTarea} className="btn btn-info ms-2t">Add</button>
            <ul className="list-group mt-4">{tareas.map((item, index) => <li key={index} onClick={borrarTarea} className="list-group-item">{item}</li>)}</ul>
        </div>

    );
};

export default Form;
