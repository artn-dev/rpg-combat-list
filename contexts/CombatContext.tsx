import { createContext, useState, ReactNode } from 'react'


interface Combatant {
    name: string
    initiative: number
}

interface CombatContextProps {
    combatantList: Combatant[]
    setCombatantList: (arg: Combatant[]) => void
}

interface CombatProviderProps {
    children?: ReactNode
}


export const CombatContext = createContext({} as CombatContextProps)

export const CombatProvider = ({ children }: CombatProviderProps) => {
    const [combatantList, setCombatantList] = useState<Combatant[]>([])

    return (
        <CombatContext.Provider
            value={{
                combatantList,
                setCombatantList
            }}
        >
            {children}

        </CombatContext.Provider>
    )
}
