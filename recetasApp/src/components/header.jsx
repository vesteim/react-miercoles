import logo from "./../assets/logo-header.png";



export default function Header(){
   let datosHeader = {
    titulo: "La cocina de jossy",
    descripcion:"De la cocina a tu paladas"
   }
   
    return(
       <div className="p-5 bg-primary text-white text-center">
            <h1><img src={logo} className="logo-header" /></h1>
            <p>{datosHeader.descripcion}</p>
       </div>
    )
}