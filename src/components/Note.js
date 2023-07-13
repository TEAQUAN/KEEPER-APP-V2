import DeleteIcon from '@mui/icons-material/Delete';
const Note = (props) => {
    let notediv = {
        background: "#fff",
        borderRadius: "7px",
        boxShadow: "0 2px 5px #ccc",
        padding: "10px",
        width: "240px",
        margin: "16px",
        float: "left",
    }
    let noteh1 = {
        fontSize: "1.1em",
        marginBottom: "6px"
    }
    let notep = {
        fontSize: "1.1em",
        marginBottom: "10px",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word",
    }

    let btx = {
        position: "relative",
        float: "right",
        marginRight: "10px",
        color: "#f5ba13",
        border: "none",
        width: "36px",
        height: "36px",
        cursor: "pointer",
        outline: "none",
    }
    function handleClick() {
        props.onDelete(props.id);
    }
    return (
        <div style={notediv}>
            <h1 style={noteh1}>{props.title}</h1>
            <p style={notep}>{props.content}</p>
            <button style={btx} onClick={handleClick}> <DeleteIcon/></button>
        </div>
    )
}
export default Note;