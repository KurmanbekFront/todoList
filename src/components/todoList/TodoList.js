import React, { useState } from "react";
import Button from "../button/Button";
import classes from "./TodoList.module.css";

const TodoList = ({ todo, editTodo, deleteTodo}) => {
    const [inputValue, setInputValue] = useState("");
    const [editMode, setEditMode] = useState(null);

    
    const handleEditClick = (id) => {
        setEditMode((prevState) => (prevState === id ? null : id));
    };

    const handleSaveClick = (id, newTitle) => {
        if (newTitle !== "") {
            editTodo({ id, title: newTitle });
            setInputValue("")
        }
        setEditMode(null)
    };

    const handleCancelClick = () => {
        setEditMode(null)
    };

    return (
        <div>
            {todo.map((item) => (
                <div className={classes.todo_block} key={item.id}>
                    {editMode === item.id ? ( <input
                                type="text"
                                defaultValue={item.title}
                                onChange={(e) => (setInputValue(e.target.value))} />) 
                                : (<div className={classes.todo_text}><p>{item.title}</p>
                    </div>)}

                    {editMode === item.id ? (
                        <div className={classes.btn_block}>
                            <Button onClick={handleCancelClick} name="Cancel" />
                            <Button onClick={() => handleSaveClick(item.id, inputValue)} name="Save" />
                        </div>
                    ) : (
                        <div className={classes.icon_block}>
                            <div className={classes.btnIcon} onClick={() => handleEditClick(item.id)}>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.18808 18.4261C5.24165 18.4261 5.29522 18.4208 5.34879 18.4127L9.85415 17.6226C9.90772 17.6119 9.95862 17.5877 9.99612 17.5476L21.3506 6.1931C21.3754 6.16832 21.3951 6.13889 21.4086 6.10648C21.422 6.07408 21.4289 6.03934 21.4289 6.00426C21.4289 5.96918 21.422 5.93444 21.4086 5.90204C21.3951 5.86964 21.3754 5.8402 21.3506 5.81542L16.8988 1.36096C16.8479 1.31007 16.7809 1.28328 16.7086 1.28328C16.6363 1.28328 16.5693 1.31007 16.5184 1.36096L5.16397 12.7154C5.12379 12.7556 5.09969 12.8038 5.08897 12.8574L4.29879 17.3627C4.27274 17.5062 4.28205 17.6539 4.32592 17.793C4.36979 17.9321 4.4469 18.0584 4.55058 18.161C4.72736 18.3324 4.94969 18.4261 5.18808 18.4261ZM6.99344 13.7547L16.7086 4.04221L18.672 6.0056L8.95683 15.7181L6.57558 16.1386L6.99344 13.7547ZM21.8568 20.6761H2.14254C1.66844 20.6761 1.2854 21.0592 1.2854 21.5333V22.4976C1.2854 22.6154 1.38183 22.7119 1.49969 22.7119H22.4997C22.6175 22.7119 22.714 22.6154 22.714 22.4976V21.5333C22.714 21.0592 22.3309 20.6761 21.8568 20.6761Z"
                                        fill="white"
                                        fillOpacity="0.85"/>
                                </svg>
                            </div>
                            <div className={classes.btnIcon} onClick={() => deleteTodo(item.id)}>
                                <svg width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path 
                                        d="M7.92815 3.21185H7.71387C7.83173 3.21185 7.92815 3.11542 7.92815 2.99757V3.21185H16.071V2.99757C16.071 3.11542 16.1674 3.21185 16.2853 3.21185H16.071V5.14042H17.9996V2.99757C17.9996 2.05203 17.2308 1.28328 16.2853 1.28328H7.71387C6.76833 1.28328 5.99958 2.05203 5.99958 2.99757V5.14042H7.92815V3.21185ZM21.4282 5.14042H2.57101C2.0969 5.14042 1.71387 5.52346 1.71387 5.99757V6.85471C1.71387 6.97257 1.8103 7.06899 1.92815 7.06899H3.54601L4.20762 21.0779C4.25047 21.9913 5.00583 22.7119 5.91922 22.7119H18.0799C18.996 22.7119 19.7487 21.994 19.7915 21.0779L20.4532 7.06899H22.071C22.1889 7.06899 22.2853 6.97257 22.2853 6.85471V5.99757C22.2853 5.52346 21.9023 5.14042 21.4282 5.14042ZM17.8737 20.7833H6.12548L5.47726 7.06899H18.5219L17.8737 20.7833Z" 
                                        fill="white" 
                                        fillOpacity="0.85" />
                                </svg>
                            </div>
                        </div>
                    )}
                    
                </div>
            ))}
        </div>
    );
};

export default TodoList;
