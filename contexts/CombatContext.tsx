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
    deleteCombatantById: (arg: string) => void
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

    function deleteCombatantById(combatantId: string) {
        const combatantIndex = combatantList.findIndex(
            (combatant: Combatant) => (combatant.id == combatantId)
        )

        let newList = combatantList.slice()
        newList.splice(combatantIndex, 1)

        setCombatantList(newList)
    }

    return (
        <CombatContext.Provider
            value={{
                combatantList,
                setCombatantList,
                getCombatantId,
                deleteCombatantById
            }}
        >
            {children}

        </CombatContext.Provider>
    )
}
