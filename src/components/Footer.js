const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();

    const footer = {
    position: "absolute",
    textAlign: "center",
    bottom: "0",
     width: "100%",
    height: "2.5rem",     
  
    }
    const prgp = {
        color: "black",
    }
    return (
        <div>
        <footer style={footer}>
            <p style={prgp}>copyright {year}</p>
        </footer>
        
        </div>
    )
}
export default Footer