import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import io from 'socket.io-client';

let socket;

const Chat = () => {
    const {name, room} = useParams()
    const [messages, setMessages] = useState([])


    useEffect(() => {
        socket = io('localhost:5000');

        socket.emit('join', { name, room })

        return () => {
            socket.emit('disconnect')
            socket.off();
        }

    }, [name, room])

    return (
        <div>
            
        </div>
    )
}

export default Chat;