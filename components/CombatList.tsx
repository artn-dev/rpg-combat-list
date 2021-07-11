import { useContext } from 'react'
import { CombatContext } from '../contexts/CombatContext'
import CombatantNode from './Combatant'
import {
  Tooltip,
  Typography ,
  List,
  IconButton,
  Theme,
  RootRef
} from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { makeStyles, createStyles } from '@material-ui/core/styles'
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DroppableProvided,
  DroppableStateSnapshot,
  DraggableProvided,
  DraggableStateSnapshot
} from 'react-beautiful-dnd'
import clsx from 'clsx'


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
    dragged: {
      boxShadow: theme.shadows[2],
    },
  }),
)


const CombatList = () => {
    const { combatantList, clearCombatants, setCombatantList } = useContext(CombatContext)

    const classes = useStyles()

    const swapCombatants = (param: DropResult) => {
      if (!param.destination)
        return

      const srcindex = param.source.index
      const dstindex = param.destination.index

      let newList = combatantList.slice()
      newList.splice(dstindex, 0, newList.splice(srcindex, 1)[0])
      setCombatantList(newList)
    }

    return (
      <>
        <div className={classes.title}>
          <Typography variant="h3" align="center" className={classes.title}>
            Combat List
          </Typography>

          {combatantList.length > 0 && (
            <Tooltip title="Clear">
              <IconButton aria-label="clear" edge="end" onClick={clearCombatants}>
                <HighlightOffIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          )}
        </div>

        {combatantList.length == 0 && (
          <Typography variant="h6" color="textSecondary" align="center">
            The list is currently empty
          </Typography>
        )}

        <DragDropContext onDragEnd={swapCombatants}>
          <div className={classes.demo}>
            <Droppable droppableId="combat-list">
              {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
                <RootRef rootRef={provided.innerRef}>
                  <List dense={true}>
                    {combatantList.map((combatant, index) => (
                      <Draggable key={combatant.id} draggableId={combatant.id} index={index}>
                        {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) =>(
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={clsx({
                              [classes.dragged]: snapshot.isDragging,
                            })}
                          >
                            <CombatantNode
                              name={combatant.name}
                              initiative={combatant.initiative}
                              id={combatant.id}
                              key={combatant.id}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </List>
                </RootRef>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </>
    )
}

export default CombatList
