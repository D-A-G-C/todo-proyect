import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
    return (
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text"></p>
            <span className="LoadingTodo-deleteIcon"></span>
            <span className="LoadingTodo-upIcon"></span>
            <span className="LoadingTodo-downIcon"></span>
        </div>
    );
}

export { TodosLoading };
