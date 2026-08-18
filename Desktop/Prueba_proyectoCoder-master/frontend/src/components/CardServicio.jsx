export default function CardServicio(props) {
  console.log("Ruta de la imagen recibida:", props.imagen); // Agregá esta línea
  
  return (
    //
    <div className="caja">
      <img src={props.imagen} alt={props.titulo} />
      <h3>{props.titulo}</h3>
      <p>{props.descripcion}</p>
    </div>
  );
}