export default function Elements(props) {
    const { element, setElement } = props;
    const backMenu = () =>{
      setElement(null);
    }
    return (
        <div className="characters">
          <h1>Elementos</h1> 
          <span className="back-home" onClick={backMenu}>Volver al Menu</span>
          <div className="container-characters">
            {element.map((element, index) => (
              <div className="character-container" key={index}>
                <div>
                  <h5>{element.name}</h5>
                  <h1>{element.symbol}</h1>
                </div>
                <div>
                  <br/>
                  <p className="text-grey">Atomic Mass: {element.atomicMass}</p>
                  <p className="text-grey">Atomic Number: {element.atomicNumber}</p>
                  {element.electronegativit != null ? (
                    <p className="text-grey">Electronegativity: {element.electronegativity}</p>
                  ): (
                    <p className="text-grey"></p>
                  )}
                  
                  <p className="text-grey">Group: {element.groupBlock}</p>
                  {element.electronegativit != null ? (
                    <p className="text-grey">Standard State: {element.standardState}</p>
                  ): (
                    <p className="text-grey">State not known</p>
                  )}
                  
                </div>
              </div>
            ))}
          </div>
          <span className="back-home" onClick={backMenu}>Volver al Menu</span>
        </div>
  )
}
