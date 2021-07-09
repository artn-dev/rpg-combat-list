import { ChangeEvent, useState, useContext } from 'react'
import {
    TextField,
    Button,
    Theme,
    Grid
} from '@material-ui/core'
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
    const [initError, setInitError] = useState(false)
    const [initErrorText, setInitErrorText] = useState("")
    const [nameText, setNameText] = useState("")
    const [initiative, setInitiative] = useState("0")
    const [name, setName] = useState("")

    const { addCombatant } = useContext(CombatContext)

    const classes = useStyles()

    function initiativeIsInvalid(value?: string) {
        if (!value) {
            let initInputField = document.getElementById("init-input-field") as HTMLInputElement
            return initInputField.value == ""
        }

        return value == ""
    }

    function toggleInitiativeError(error: boolean) {
        const helperText = error ? "Initiative must be a number" : ""

        setInitError(error)
        setInitErrorText(helperText)
    }

    function updateInitiative(event: ChangeEvent<HTMLInputElement>) {
        const valueIsInvalid = initiativeIsInvalid(event.target.value)
        toggleInitiativeError(valueIsInvalid)

        if (!valueIsInvalid)
            setInitiative(event.target.value)
    }

    function updateName(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
        setNameText("")
    }

    function addInputCombatant() {
        if (initiativeIsInvalid()) {
            toggleInitiativeError(true)
            return
        }

        if (name == "") {
            setNameText("Name is required")
            return
        }

        addCombatant(name, parseInt(initiative, 10))

        let nameInputField = document.getElementById("name-input-field") as HTMLInputElement
        nameInputField.value = ""

        let initInputField = document.getElementById("init-input-field") as HTMLInputElement
        initInputField.value = ""

        setName("")
        setInitiative("0")
    }

    return (
        <Grid container direction="column" spacing={3} alignContent="center" component="form">
            <Grid item>
                <TextField
                    id="name-input-field"
                    label="Name"
                    color="primary"
                    helperText={nameText}
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
