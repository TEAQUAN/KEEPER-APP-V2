import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function Createnote(props) {

    const form = {
        position: "relative",
        width: "480px",
        boxShadow: "rgb(138, 137, 137) 0px 1px 5px",
        margin: "30px auto 20px",
        background: "rgb(255, 255, 255)",
        padding: "15px",
        borderRadius: "7px"
    }
    const input = {
        width: "100%",
        fontSize: "1.2em",
        fontFamily: "inherit",
        resize: "none",
        borderWidth: "initial",
        borderStyle: "none",
        borderColor: "initial",
        borderImage: "initial",
        padding: "4px",
        outline: "none",
    }
    const txtarea = {
        width: "100%",
        fontSize: "1.2em",
        fontFamily: "inherit",
        resize: "none",
        borderWidth: "initial",
        borderStyle: "none",
        borderColor: "initial",
        borderImage: "initial",
        padding: "4px",
        outline: "none",
    }
    const bTn = {
        position: "absolute",
        right: "18px",
        bottom: "-18px",
        color: "rgb(255, 255, 255)",
        width: "36px",
        height: "36px",
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 3px",
        cursor: "pointer",
        background: "rgb(245, 186, 19)",
        borderWidth: "initial",
        borderStyle: "none",
        borderColor: "initial",
        borderImage: "initial",
        borderRadius: "50%",
        outline: "none",
    }

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { value, name } = event.target;
        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }
    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }
    const [render,setrender] = useState(false)

    function handleClick () {
        setrender(true)
    }
    return (
        <div>
            <form style={form}>
            {render?   <input style={input}
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                /> : null }
              
                <textarea
                    style={txtarea}
                    onClick={handleClick}
                    name="content"
                    onChange={handleChange}
                    placeholder="Take a note..."
                    rows={render? 3: 1}
                    value={note.content}
                />
                <Zoom in={render}>
                <Fab onClick={submitNote} style={bTn}> <AddIcon/></Fab>
                </Zoom>
                
            </form>
        </div>
    )
}
export default Createnote