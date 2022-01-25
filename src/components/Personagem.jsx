const Personagem = ({personagem}) => {
    return  personagem.map((item) => ( 
        <div>
        <img src={item.image} alt={item.name} />
        <p>{item.mane}</p>
        <p>{item.location.name}</p>
      </div>
    ));
}
 
export default Personagem;