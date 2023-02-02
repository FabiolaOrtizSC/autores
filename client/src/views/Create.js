import axios from 'axios';
import { Link } from "react-router-dom";
import AutorsForm from '../components/AutorsForm';
import React, { useState } from 'react'

const Create = (props) => {

    const [autor, setAutor] = useState([]);
    const [errors, setErrors] = useState([]); 

    const createAutor = author => {
        axios.post('http://localhost:8000/api/autors/new/', {"name": author})
            .then((res)=>{
                setAutor([...autor, res.data.newlyCreatedAutor.name]);
            })
            .catch((err)=>{
                console.log(err, "AQUI ERROR")
                const errorResponse = err.response.data.error.errors ;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });       
    }

    return (
        <div className='margen-izquierdo'>
            <Link className='negrita' to='/'>Home</Link>
            <p className='text-primary negrita'>Add a new author:</p>
            <AutorsForm onSubmitProp={createAutor} autorName={""} />
            {errors.map((err, index) => <p className='error' key={index}>{err}</p>)}
        </div>
    )
}

export default Create;