import { ChangeEvent, useState, useContext } from 'react'
import { TextField, Button, Theme, Grid } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { CombatContext } from '../contexts/CombatContext'


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            maxWidth: "275px",
            minHeight: 200,
        },

        control: {
            display: "flex",
            justifyContent: "center",
            marginTop: 20,
        },
    })
)


const CombatantInput = () => {
    const { addCombatant } = useContext(CombatContext)

    const classes = useStyles()

    const [initError, setInitError] = useState(false)
    const [initErrorText, setInitErrorText] = useState("")
    const [nameHelperText, setNameHelperText] = useState("")
    const [initiative, setInitiative] = useState("")
    const [name, setName] = useState("")

    const toggleInitiativeError = (error: boolean) => {
        const helperText = error ? "Initiative must not be empty" : ""
        setInitError(error)
        setInitErrorText(helperText)
    }

    const updateInitiative = (event: ChangeEvent<HTMLInputElement>) => {
        setInitiative(event.target.value)
        const initIsValid = /^\d+$/.test(event.target.value)
        toggleInitiativeError(!initIsValid)
    }

    const updateName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
        setNameHelperText("")
    }

    const addInputCombatant = () => {
        if (initError)
            return

        if (name == "") {
            setNameHelperText("Name is required")
            return
        }

        addCombatant(name, parseInt(initiative, 10))

        setName("")
        setInitiative("")
    }

    return (
        <Grid container direction="column" spacing={5} alignContent="center" component="form">
            <Grid item>
                <TextField
                    id="name-input-field"
                    label="Name"
                    color="primary"
                    helperText={nameHelperText}
                    value={name}
                    onChange={updateName}
                />
            </Grid>
            <Grid item>
                <TextField
                    id="init-input-field"
                    label="Initiative"
                    type="number"
                    color="primary"
                    error={initError}
                    helperText={initErrorText}
                    value={initiative}
                    onChange={updateInitiative}
                />
            </Grid>
            <Grid item>
                <div className={classes.control}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={addInputCombatant}
                    >
                        Add
                    </Button>
                </div>
            </Grid>
        </Grid>
    )
}

export default CombatantInput
