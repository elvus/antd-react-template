import React from "react";
import { Outlet } from "react-router-dom";
import LoadingPage from "../../pages/loading";
import { useAuth } from "./authProvider";

export const ProtectedRoutes: React.FC = () => {
    const ctx = useAuth();
    if (!ctx.keycloakService.getToken()) {
        return <LoadingPage />;
    }

    return <Outlet />;
};
