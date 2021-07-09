import { useContext, useState } from 'react'
import { CombatContext, Combatant } from '../contexts/CombatContext'
import {
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemSecondaryAction,
    Avatar,
    IconButton,
    Typography,
    Tooltip,
    Theme
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import { createStyles, makeStyles } from '@material-ui/styles'
import clsx from 'clsx'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        deleted: {
            textDecoration: "line-through",
            textDecorationColor: "rgba(0, 0, 0, 0.54)",
        },
    }),
)

const CombatantNode = ({ name, initiative, id }: Combatant) => {
    const { deleteCombatantById } = useContext(CombatContext)

    const classes = useStyles()

    const [isInCombat, setIsInCombat] = useState<boolean>(true)

    const selfDelete = () => deleteCombatantById(id)

    const toggleIsInCombat = () => {
        setIsInCombat(!isInCombat)
    }

    return (
        <ListItem divider={true}>
            <ListItemAvatar>
                <Avatar>
                    <Typography align="center" variant="h5">
                        {initiative}
                    </Typography>
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                className={clsx({
                    [classes.deleted]: !isInCombat,
                })}
                primary={name}
                primaryTypographyProps={{
                    variant: "h5",
                    color: isInCombat ? "textPrimary" : "textSecondary",
                }}
            />
            <ListItemSecondaryAction>
                <Tooltip title={isInCombat ? "In Combat" : "Out of Combat"}>
                    <IconButton
                        edge="end"
                        aria-label="toggle-in-combat"
                        onClick={toggleIsInCombat}
                        >
                        { isInCombat 
                            ? <VisibilityIcon />
                            : <VisibilityOffIcon />
                        }
                    </IconButton>
                </Tooltip>
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
    )
}

export default CombatantNode
