import React from 'react';

import './TodoList.css';
import IconButton from './IconButton';
import { ReactComponent as DeleteIcon } from '../icons/trashcan_delete_remove_trash_icon_178327.svg';


const Todo = ({ text, completed, onToggleCompleted, onDeleteTodo }) => 
(
        <div>
            <input 
                type="checkbox"
                className="TodoList__checkbox"
                checked={completed}
                onChange={onToggleCompleted} />
            <p className="TodoList__text">{text}</p>
            <IconButton type="button" onClick={onDeleteTodo} aria-label="Delete tedo">
                <DeleteIcon  width="32px" height="32px" fill="#fff" />
            </IconButton>
        </div>
    );

export default Todo;