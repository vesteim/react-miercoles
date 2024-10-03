
import Article from"./article";

let datosRecetas = [
    {
        titulo: "Sancocho Trifacico",
        descripcion:"asnkajfkja assad",
        fecha: "2024-09-25",
        imagen: "https://cdn.colombia.com/gastronomia/2017/01/05/sancocho-trifasico-3123.jpg"
    },

    {
        titulo: "Arros con pollo",
        descripcion:"tocineta, maduro",
        fecha: "2024-09-11",
        imagen: "https://www.elsabor.com.ec/wp-content/uploads/2022/02/arroz-pollo.jpg"
    },

    {
        titulo: "Pasta a la Boloñesa",
        descripcion:"asnkajfkja assad",
        fecha: "2024-09-2",
        imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/MDVSZJ5BVBE7BFY63EEAVPWAGE.jpg"
    }

   

    

]

export default function Content(){
    return(
        <div className="col-sm-8">
           {
            datosRecetas.map((receta, pos)=>(<Article receta={receta} key={pos}/>))
           }
           
            
           
      
    </div>
    )
}

