import { createContext, useState, ReactNode } from 'react'


export interface Combatant {
    name: string
    initiative: number
    id: string
}

interface CombatContextProps {
    combatantList: Combatant[]
    setCombatantList: (arg: Combatant[]) => void
    getCombatantId: () => string
}

interface CombatProviderProps {
    children?: ReactNode
}


export const CombatContext = createContext({} as CombatContextProps)

export const CombatProvider = ({ children }: CombatProviderProps) => {
    const [combatantList, setCombatantList] = useState<Combatant[]>([])
    const [combatantCount, setCombatantCount] = useState<number>(0)

    function getCombatantId() {
        const combatantId = combatantCount
        setCombatantCount(combatantCount + 1)
        return combatantId.toString()
    }

    return (
        <CombatContext.Provider
            value={{
                combatantList,
                setCombatantList,
                getCombatantId
            }}
        >
            {children}

        </CombatContext.Provider>
    )
}
