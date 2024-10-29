import { ReactNode, createContext, useContext } from "react";

const AuthContext = createContext<any>(null);
interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    return (
        <AuthContext.Provider value={true}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};  