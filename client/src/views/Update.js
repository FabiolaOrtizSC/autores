import axios from 'axios';
import { Link } from "react-router-dom";
import AutorsForm from '../components/AutorsForm';
import React, { useEffect, useState } from 'react'

const Update = (props) => {

    const [autor, setAutor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/autors/' + props.match.params.id)
            .then(res => {
                setAutor(res.data.oneSingleAutor);
                setLoaded(true);
            })
    }, [props.match.params.id])

    const updateAutor = author => {
        axios.put('http://localhost:8000/api/autors/update/' + props.match.params.id, {"name": author})
            .then(res => console.log(res))
            .catch(err=>{
                console.log(err)
                const errorResponse = err.response.data.error.errors;
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
            <p className='text-primary negrita'>Edit this author:</p>
            {loaded && <AutorsForm onSubmitProp={updateAutor} autorName={autor.name} />}
            {errors.map((err, index) => <p className='error' key={index}>{err}</p>)}
        </div>
    )
}

export default Update;