
import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";

const  Details=()=>{
    const location = useLocation();
    let history = useNavigate();
    let state= location.state;

    const handleNavigation = () =>{
        history(state.goBack);
    }

    return (
       <div data-testid="details">
        {
            state ?
            <>
                <button className="go-back" onClick={()=>handleNavigation()}> Go Back</button>
                <article>
                    <aside className="article-flag">
                    <img src={state["sprites"]['other']["official-artwork"]['front_default']} alt={state.name} />
                    </aside>
                    <div className="article-main">
                    <h3>{state.name.toUpperCase()} </h3>
                    <div className="flex f-btw">
                        <div className="row">
                        <ol className="items">
                            <li>
                                Abilities: <span>{state.abilities}</span>
                            </li>
                            <li>
                                Height: <span>{state.height}</span>
                            </li>
                            <li>
                                Weight: <span>{state.weight}</span>
                            </li>
                            <li>
                                Base experience: <span>{state.base_experience}</span>
                            </li>
                            <li>
                                order: <span>{state.order}</span>
                            </li>
                            <li>
                                Species: <span>{state.species.name}</span>
                            </li>
                            <li >
                                <h3>{`${state.name.toUpperCase()}'s Moves`} </h3>
                                <div className="list-box">
                                    {
                                        state.moves && state.moves.length && state.moves.map((item,index) =>{
                                            return(
                                                <p key={`${item.move.name}_${index}`}>
                                                    {item.move.name}
                                                </p>
                                            )
                                        })
                                    }
                                </div>
                            
                            </li>
                            <li >
                            <h3>{`${state.name.toUpperCase()}'s types`} </h3>
                                <div className="list-box">
                                {
                                        state.types && state.types.length && state.types.map((item,index) =>{
                                            return(
                                                <p key={`${item.type.name}_${index}`}>
                                                    {item.type.name}
                                                </p>
                                            )
                                        })
                                    }   
                                </div>
                            
                            </li>
                        </ol>
                        </div>

                    </div>
                    </div>
                </article>
                </>
           :<h1>No data</h1>}
        </div>
    );
}

export default Details;

