import axios from 'axios';
import { useState, useEffect } from 'react';
import AutorsList from '../components/AutorsList';

const Main = () => {

    const [autor, setAutor] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/autors")
        .then(res => {
            setAutor(res.data.allDaAutors);
            setLoaded(true);
        })
    }, []);

    console.log(autor.autor)

    const removeFromDom = (autorId) => {
        setAutor(autor.filter(autor => autor._id !== autorId));
    }

    return (
        <div>
            {loaded && <AutorsList autor={autor} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;