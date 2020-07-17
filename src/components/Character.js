import React from 'react'

function characterDetails(props) {
    const { character } = props
    return (
        <div>
            {character.map((char, val) => {
                return (
                    <div className="container" key={val}>
                        <h2>{char.name}</h2>
                        <h3>Born:  {char.birth_year}</h3>
                        <h3>Gender:  {char.gender}</h3>
                        <h3>Homeworld:  {char.homeworld.name}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default characterDetails;