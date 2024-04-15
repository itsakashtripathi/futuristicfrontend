

function Recepie({recepie}) {
  return (
    <div className="container bg-light p-3 rounded border border-light mb-2" style={{cursor: "pointer"}}>
        <h6>{recepie.recepie_name}</h6>
    </div>
  )
}

export default Recepie