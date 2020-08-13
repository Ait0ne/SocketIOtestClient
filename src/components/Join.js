import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'


const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const history = useHistory()

    const handleChange = (event) => {
        console.log(event.target)
        const {name, value} = event.target
        if (name==='name') {
            setName(value)
        } else {
            setRoom(value)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        history.push(`/chat/${room}/${name}`)
    }

    return (
        <div style={{display: 'flex', flexDirection: '', alignItems: 'center', justifyContent: 'center'}}>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} name='name' required/>
                <input type='text' onChange={handleChange} name='room' required/>
                <button type='submit'>Join</button>
            </form>
        </div>
    )
}

export default Join;