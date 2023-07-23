import { Login } from '@mui/icons-material';
import React, { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const allContexts = Login();
    return (
        <AuthContext.Provider value ={allContexts} >
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;