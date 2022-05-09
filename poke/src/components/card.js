import React from 'react';

const Card = ({image, name, height, weight,  abilities , id }) => {

    return (
        <>
            <div className="card" key={id} data-testid="card">
                <div className="card-image">
                    <img src={image} alt={name} />
                </div>
                <div className="card-content">
                    <h2 className="card-name">
                        {name}
                    </h2>
                    <ul className="card-list">
                        <li>Height: <span>{height}</span></li>
                        <li>Weight: <span>{weight}</span></li>
                        <li className="ability">
                            <p>Abilities:</p>
                            <span>{abilities}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Card;