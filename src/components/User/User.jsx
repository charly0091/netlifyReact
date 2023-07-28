const USER = {
    name: "Charly",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    age: 31,
};

const imgStyle = {
    width: "100px",
    borderRadius: "50%",
    border: "2px solid black"
};

const userStyle = {
    color: "green",
    textTransform: "uppercase"
};

export const User = () => {
    return ( 
        <>
            <h2>Mostrar Datos</h2>
            <p style = {userStyle} >Nombre: {USER.name}</p>
            <img style = {imgStyle} src={USER.avatar} alt="" />
            <p style = {{color: "red"}}>Edad: {USER.age}</p>
        </>
        
     );
}
