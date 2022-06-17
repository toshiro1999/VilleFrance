import { useEffect, useState } from 'react'
import'./ListeVilleFrance.css'

export const listeVille = [
    {
        name: 'Paris',
        cp: '75000',
        isSelected : true,
    },
    {
        name: 'Marseille',
        cp: '13000',
        isSelected : false,
    },
    {
        name: 'Lyon',
        cp: '69000',
        isSelected : false,
    },
    {
        name: 'Lille',
        cp: '59000',
        isSelected : false,
    },
    {
        name: 'Bordeaux',
        cp: '33000',
        isSelected : false,
    },
    {
        name: 'Rennes',
        cp: '35000',
        isSelected : false,
    },
    {
        name: 'Strasbourg',
        cp: '67000',
        isSelected : false,
    },
    
]

function ListeVilleFrance({nombreVilleCheckState,setNombreVilleCheckState}) {
    const [listeVilleState,setListeVilleState] = useState(listeVille);
    const handleCheckBoxBis = (elt) =>{
            if (!elt){
                setNombreVilleCheckState(nombreVilleCheckState + 1);
            }
            else{
                setNombreVilleCheckState(nombreVilleCheckState - 1);
            }   
        }
    const handleCheckBox = (villeCheck) => {
        var listeVilleBis = listeVilleState.map((elt) => {
            if(elt.name === villeCheck){
                return {...elt, isSelected: !elt.isSelected}
            }
            return elt;
        })
        setListeVilleState(listeVilleBis);
    }


    return(
        <ul> 
            {listeVilleState.map((ville) => (
                <div className= {ville.isSelected ? 'vf-villeCheck' : 'vf-villeUncheck'}>{ville.name} {ville.cp}
                    <input type="checkbox" checked={ville.isSelected} onChange={() => { handleCheckBox(ville.name) , handleCheckBoxBis(ville.isSelected)}}/>
                </div>
            ))}
        </ul>
)}

export default ListeVilleFrance