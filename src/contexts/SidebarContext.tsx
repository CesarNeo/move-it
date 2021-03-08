import { createContext, ReactNode, useState, useCallback } from 'react';

interface SidebarContextData {
    isClickHome: boolean;
    isClickRanking: boolean;
    handleClickHome: () => void;
    handleClickRanking: () => void;
}

interface SidebarProviderProps {
    children: ReactNode;
}

export const SidebarContext = createContext({} as SidebarContextData);

export function SidebarProvider({ children }: SidebarProviderProps) {
    const [isClickHome, setIsClickHome] = useState(true);
    const [isClickRanking, setIsClickRanking] = useState(false);

    const handleClickHome = useCallback(() => {
        setIsClickHome(true);
        setIsClickRanking(false);
    }, [isClickHome]);

    const handleClickRanking = useCallback(() => {
        setIsClickRanking(true);
        setIsClickHome(false);
    }, [isClickRanking]);

    return (
        <SidebarContext.Provider value={{
            isClickHome,
            isClickRanking,
            handleClickHome,
            handleClickRanking
        }}>
            {children}
        </SidebarContext.Provider>
    );
}