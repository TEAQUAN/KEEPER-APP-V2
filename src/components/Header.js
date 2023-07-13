import HighlightIcon from '@mui/icons-material/Highlight';
const Header = () => {
    let myStyle = {

        color: "#FFF",
        fontFamily: "'McLaren', cursive",
        fontWeight: "200px",
     
    };
    let myHeaderStyle = {
        backgroundColor: "#f5ba13",
    margin: "auto -16px",
    padding: "16px 32px",
    boxShadow:" 0 0 10px 0 rgba(0, 0, 0, 0.3)",
    }
    return (
        <div>
        <header style = {myHeaderStyle }>
        <h1 style={myStyle}><HighlightIcon/>Keeper</h1>
        </header>
        </div>
    )
}
export default Header