import React from 'react'
import TrainerData from './TrainerData';

function Trainerdatas() {
  
    const oktato = {
        nev: 'Kovács Péter',
        kep: './src/images/arakkep.jpg',
        orak: [
          {
            id: 1,
            nev: 'Spining',
            idopont: 'Hétfő, 10:00',
            resztvevok: [
              { id: 1, nev: 'Kiss Péter', phone:'+36301253519'},
              { id: 2, nev: 'Nagy Anna', phone:'+36202564581'},
              { id: 3, nev: 'Varga Máté', phone:'+362025125381'},
            ],
          },
          {
            id: 2,
            nev: 'Aerobic',
            idopont: 'Szerda, 14:00',
            resztvevok: [
              { id: 1, nev: 'Kiss Péter', phone:'+36202564581' },
              { id: 2, nev: 'Szabó Gábor' , phone:'+36702564581'},
              { id: 3, nev: 'Varga Máté', phone:'+36202544481'},
              { id: 4, nev: 'Kovács Ágnes', phone:'+36902564581'},
            ],
          },
        ],
    };

  
  
    return (
    <div>
        <TrainerData
     nev={oktato.nev}
     kep={oktato.kep}
     orak={oktato.orak}
   />
    </div>
  )
}

export default Trainerdatas