import React, { useContext } from 'react';
import { AuthContext } from '../../AuthContext';


const ManageAdmin = () => {
    const {user} = useContext(AuthContext);

  return (
    <div>
        <p>user </p>
    </div>
  )
}

export default ManageAdmin;