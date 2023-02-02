import React from 'react'
import axios from 'axios';

const DeleteButton = props => {

    const { autorId, successCallback } = props;

    const deleteAutor = e => {
        axios.delete('http://localhost:8000/api/autors/delete/' + autorId)
            .then(res=>{
                successCallback(autorId);
            })
    }
    return (
        <button className='btn btn-secondary' onClick={deleteAutor}>
            Delete
        </button>
    )
}

export default DeleteButton;