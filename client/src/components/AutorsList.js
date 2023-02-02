import axios from 'axios';
import React from 'react';
import DeleteButton from '../views/DeleteButton.js';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'

const AutorsList = (props) => {

    const [autor, setAutor] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/autors')
            .then(res => {
                setAutor(res.data.allDaAutors)
            })
    }, [])

    const removeFromDom = autorId => {
        setAutor(autor.filter(autor => autor._id !== autorId))
        
    }

    return (
        <div className='margen-izquierdo'>
            <Link className='negrita' to='/new'>Add an author</Link>
            <p className='text-primary negrita'>We have quotes by:</p>
            <div className='contenedor'>
                <table className="table table-striped">
                    <thead>
                        <tr className="table-light">
                            <th>Author</th>
                            <th>Actions available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {autor.map((a, idx)=>{
                            return (
                                <tr key={idx} className="table-light text-primary negrita">
                                    <td className='text-primary negrita'>
                                        {a.name}
                                    </td>
                                    <td>
                                        <Link className='btn btn-secondary margen-derecho' to={"/update/"+ a._id}>Edit</Link>
                                        <DeleteButton autorId={a._id} successCallback={removeFromDom}/>
                                    </td>
                                </tr>
                            )
                        })}    
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AutorsList;