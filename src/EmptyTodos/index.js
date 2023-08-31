import React from 'react';
import './EmptyTodos.css';
import { TodoContext } from '../TodoContext'
import { constants } from '../Constants'

function EmptyTodos() {
    return (
        <>
            <p>{constants.test}</p>
        </>
    );
}

export { EmptyTodos };
