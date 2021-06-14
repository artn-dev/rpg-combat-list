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
    Tooltip
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'


const CombatantNode = ({ name, initiative, id }: Combatant) => {
    const { deleteCombatantById } = useContext(CombatContext)

    const selfDelete = () => deleteCombatantById(id)

    return (
        <>
            <ListItem divider={true}>

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
                    <Tooltip title="Delete">
                        <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={selfDelete}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </ListItemSecondaryAction>

            </ListItem>
        </>
    )
}

export default CombatantNode
