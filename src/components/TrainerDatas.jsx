import React from 'react'
import TrainerData from './TrainerData';

function TrainerDatas() {
  
    const oktato = {
        nev: 'Kovács Péter',
        kep: './src/images/arakkep.jpg',
        sportag:'spining, aerobic',
        email:'kovacspeter@gmail.com',
        mobil:'+36701234567',

        orak: [
          {
            id: 1,
            nev: 'Spining',
            idopont: 'Hétfő, 10:00',
            resztvevok: [
              { id: 1, nev: 'Kiss Péter', mobil:'+36301253519', email:'ardfg@gddrte.hz',kep:'./src/images/arakkep.jpg'},
              { id: 2, nev: 'Nagy Anna', mobil:'+36202564581', email:'ardfg@gddrte.hz',kep:'./src/images/arakkep.jpg'},
              { id: 3, nev: 'Varga Máté', mobil:'+362025125381',email:'ardfg@gddrte.hz',kep:'./src/images/arakkep.jpg'},
            ],
          },
          {
            id: 2,
            nev: 'Aerobic',
            idopont: 'Szerda, 14:00',
            resztvevok: [
              { id: 1, nev: 'Kiss Péter', mobil:'+36202564581',email:'ardfg@gddrte.hz' ,kep:'./src/images/arakkep.jpg'},
              { id: 2, nev: 'Szabó Gábor' , mobil:'+36702564581',email:'ardfg@gddrte.hz',kep:'./src/images/arakkep.jpg'},
              { id: 3, nev: 'Varga Máté', mobil:'+36202544481',email:'ardfg@gddrte.hz',kep:'./src/images/arakkep.jpg'},
              { id: 4, nev: 'Kovács Ágnes', mobil:'+36902564581',email:'ardfg@gddrte.hz',kep:'./src/images/arakkep.jpg'},
            ],
          },
        ],
    };

  
  
    return (
    <div>
        <TrainerData
     nev={oktato.nev}
     kep={oktato.kep}
     sportag={oktato.sportag}
     email={oktato.email}
     mobil={oktato.mobil}
     orak={oktato.orak}
   />
    </div>
  )
}

export default TrainerDatas;