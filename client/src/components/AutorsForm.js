import '../style/Style.css';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

const AutorsForm = (props) => {

    const { autorName, onSubmitProp } = props;
    const [autor, setAutor] = useState(autorName); 
    
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp(autor);
        setAutor("");
    }
    
    return (
        <div className='borde-negro'>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name:</label><br />
                    <input type="text" name="name" onChange = {(e)=>setAutor(e.target.value)} value={autor}/>
                </p>
                <Link className='btn btn-primary margen-derecho' to={"/"}>Cancel</Link>
                <input type="submit" className='btn btn-primary' value='Submit'/>
            </form>
        </div>
    )
}

export default AutorsForm;