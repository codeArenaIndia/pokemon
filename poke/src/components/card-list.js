
import Card from  './card';

const CardList = ({searchAndSort, data, showDetails}) =>{
    return(
        <ul className="card-grid">
            {searchAndSort(data && data.length && data.map(({image, name, height, weight, abilities, id ,smallImage}) => (
                <li key={id}
                    searchtext={`${name} ${abilities}`} 
                    height={height} 
                    weight={weight} 
                    name={name}
                >
                    <Card name={name} 
                        height={height} 
                        weight={weight} 
                        abilities={abilities} 
                        id={id} 
                        image={image} 
                        smallImage={smallImage} 
                        showDetails={showDetails} 
                        data={data}
                    />           
                </li>
            )))}
        </ul>
    )
}
export default CardList;