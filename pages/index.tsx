import CombatantInput from '../components/CombatantInput'
import CombatList from '../components/CombatList'
import {
  Container,
  Theme,
  Card,
  CardContent
} from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: "2rem",
    },

    row: {
      display: "flex",
      gap: "5rem",
      marginTop: "4rem",
    },

    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    card: {
      minWidth: 500,
      minHeight: 200,
    }
  }),
)


export default function Home() {
  const classes = useStyles()

  return (
    <>
      <Container className={classes.root}>
        <div className={classes.row}>

          <Card variant="outlined" className={classes.card}>
              <CardContent className={classes.form}>
                <CombatantInput />
              </CardContent>
          </Card>

          <CombatList />

        </div>
      </Container>
    </>
  )
}
