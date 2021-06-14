import { useContext } from 'react'
import { CombatContext } from '../contexts/CombatContext'
import CombatantNode from './Combatant'
import {
    Card,
    CardContent,
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

    card: {
      minWidth: 500,
      minHeight: 200,
    },
  }),
)


const CombatList = () => {
    const { combatantList, clearCombatants } = useContext(CombatContext)

    const classes = useStyles()

    return (
          <Card variant="outlined" className={classes.card}>
            <CardContent>

                <div className={classes.title}>

                    <Typography variant="h3" align="center" className={classes.title}>
                        Combat List
                    </Typography>

                    <Tooltip title="Clear">
                        <IconButton aria-label="clear" edge="end" onClick={clearCombatants}>
                            <HighlightOffIcon fontSize="large" />
                        </IconButton>
                    </Tooltip>

                </div>

                <div className={classes.demo}>
                  <List dense={true}>

                    {
                      combatantList.map((combatant) => (
                          <CombatantNode
                            name={combatant.name}
                            initiative={combatant.initiative}
                            id={combatant.id}
                            key={combatant.id}
                          />
                      ))
                    }

                  </List>
                </div>

            </CardContent>
          </Card>
    )
}

export default CombatList
