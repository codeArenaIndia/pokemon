
import Card from  './card';

const CardList = ({ data}) =>{
    return(
        <ul className="card-grid">
            {data && data.length && data.map(({image, name, height, weight, abilities, id ,smallImage}) => (
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
                        data={data}
                    />           
                </li>
            ))}
        </ul>
    )
}
export default CardList;