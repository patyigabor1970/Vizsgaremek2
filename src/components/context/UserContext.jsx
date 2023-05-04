import {useState,createContext} from 'react'

  const UserContext = createContext();

  export const UserProvider=({children})=>{ 

    const [refresh, setRefresh]=useState(false);

    const update=()=>{
        setRefresh(prev=>!prev);
    }

    const logout=()=>{
        sessionStorage.removeItem('usertoken');
        update();
    }

        return <UserContext.Provaider value={{update,logout}}>{children}</UserContext.Provaider>
  }
  
export default UserContext;