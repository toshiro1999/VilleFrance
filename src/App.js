import Banner from './Banner'
import { useEffect, useState } from 'react'
import ListeVilleFrance from './ListeVilleFrance'
import VilleSelectionne from './VilleSelectionne';

function App() {
  const [nombreVilleCheckState,setNombreVilleCheckState] = useState(1)
  return (
    <div>  
      <Banner /> 
      <VilleSelectionne nombreVilleCheckState={nombreVilleCheckState}/>
      <ListeVilleFrance nombreVilleCheckState={nombreVilleCheckState} setNombreVilleCheckState={setNombreVilleCheckState} />
      
    </div>
  );
}

export default App;