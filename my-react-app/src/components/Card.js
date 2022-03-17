const Card = ({ detail }) => {
    return(
        <div className="planet-container">
          <div className="img-container">
            <img src={require(`../images/${detail.name}.jpg`)} alt="planets" />
          </div>

          <div className="planet-details">
            <p>Name: {detail.name}</p>
            <p>Gravity: {detail.gravity}</p>
            <p>Climate: {detail.climate}</p>
            <p>Surface Water: {detail.surface_water}</p>
          </div>
        </div>
    )
}

export default Card;