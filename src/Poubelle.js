var listeVilleBis = listeVilleState.map(()=>{})

villeC.isSelected ? setNombreVilleCheckState(nombreVilleCheckState + 1) : setNombreVilleCheckState(nombreVilleCheckState)
const handleCheckBox = (villeCheck) => {
    console.log('bjr');
    var numbers = [1, 2, 3, 4]
    var doubles = numbers.map(x => x * 2) // [2, 4, 6, 8]
    console.log(doubles)
    
    var listeVilleBis = listeVilleState.map((elt) => {
            if(elt.name === villeCheck){
                elt.isSelected ? elt.isSelected = false : elt.isSelected = true;
            }
            else{
                elt;
            }
    })}
    setListeVilleState(listeVilleBis)
