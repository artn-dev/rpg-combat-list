import { useContext } from 'react'
import { CombatContext, Combatant } from '../contexts/CombatContext'
import {
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemSecondaryAction,
    Avatar,
    IconButton,
    Typography,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'


const CombatantNode = ({ name, initiative, id }: Combatant) => {
    const { combatantList, setCombatantList } = useContext(CombatContext)

    function selfDelete() {
        const selfIndex = combatantList.findIndex(
            (combatant: Combatant) => (combatant.id == id)
        )

        let newList = combatantList.slice()
        newList.splice(selfIndex, 1)

        setCombatantList(newList)
    }

    return (
        <>
            <ListItem divider={true} key={id}>

                <ListItemAvatar>
                    <Avatar>
                        <Typography align="center" variant="h5">
                            {initiative}
                        </Typography>
                    </Avatar>
                </ListItemAvatar>

                <ListItemText
                    primary={name}
                    primaryTypographyProps={{ variant: "h5" }}
                />

                <ListItemSecondaryAction>
                    <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={selfDelete}
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>

            </ListItem>
        </>
    )
}

export default CombatantNode
