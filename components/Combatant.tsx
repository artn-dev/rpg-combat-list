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


interface CombatantNodeProps {
    name: string
    initiative: number
    key: any
}


const CombatantNode = ({ name, initiative, key }: CombatantNodeProps) => {
    return (
        <>
            <ListItem divider={true} key={key}>

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
                    <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>

            </ListItem>
        </>
    )
}

export default CombatantNode
