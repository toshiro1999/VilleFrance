import { useEffect, useState } from 'react'
import './villeSelectionne.css'

function VilleSelectionne({nombreVilleCheckState}){
    return <h1 className='vf-selectionne'>Vous avez sélectionné {nombreVilleCheckState} villes</h1>
}

export default VilleSelectionne