export default function Article({receta, key}){
    return(
      <>
      <h2>{receta.titulo}</h2>
      <h5>{receta.fecha}</h5>
      <div className="fakeimg">
          <img src={receta.imagen} className="img-fluid"/>
      </div>
      <p>{receta.descripcion}</p>
      <button className="btn btn-primary">Leer Recetas</button>
      </>
    )
}