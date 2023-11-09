import * as React from 'react';
import { useApp } from '../context/app';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';


export default function Routes() {
    const { email } = useApp()
    return (
        <>
            {
                email ?
                    <AppRoutes />
                    :
                    <AuthRoutes />
            }
        </>
    );
}