import { useContext } from 'react'
import { CombatContext } from '../contexts/CombatContext'
import CombatantNode from './Combatant'
import {
    Tooltip,
    Typography ,
    List,
    IconButton,
    Theme
} from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { makeStyles, createStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  }),
)


const CombatList = () => {
    const { combatantList, clearCombatants } = useContext(CombatContext)

    const classes = useStyles()

    return (
      <>
        <div className={classes.title}>
          <Typography variant="h3" align="center" className={classes.title}>
            Combat List
          </Typography>

          { combatantList.length > 0 && (
              <Tooltip title="Clear">
                <IconButton aria-label="clear" edge="end" onClick={clearCombatants}>
                  <HighlightOffIcon fontSize="large" />
                </IconButton>
              </Tooltip>
          )}
        </div>

        { combatantList.length == 0 && (
          <Typography variant="h6" color="textSecondary" align="center">
            The list is currently empty
          </Typography>
        )}

        <div className={classes.demo}>
          <List dense={true}>
            { combatantList.map((combatant) => (
                  <CombatantNode
                    name={combatant.name}
                    initiative={combatant.initiative}
                    id={combatant.id}
                    key={combatant.id}
                  />
            ))}
          </List>
        </div>
      </>
    )
}

export default CombatList
