import { useState, useRef,useEffect } from 'react';
import '../../styles/css/CardGenerator.css';
import Cards from '../Cards';



const CartGenerator = () => {
    const [cards, setCards] = useState([]);
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicou');
        const text = inputRef.current.value;
        setCards([...cards, text]);
        inputRef.current.value = ``;
    }

    useEffect(() => {
        console.log(cards);
    }, [cards])

    return (
        <div className="card-generator">
            <form onSubmit={handleSubmit}>
                <label for="task">Coloque a sua tarefa aqui</label>
                <input type="text"name="task" ref={inputRef} />
                <div className="card-generator_options">
                    <button type='Submit'>Criar</button>
                </div>
            </form>
            <Cards info={cards}/>
        </div>
    )
}


export default CartGenerator;