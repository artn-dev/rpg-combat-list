import CombatantInput from '../components/CombatantInput'
import CombatList from '../components/CombatList'
import {
  Container,
  Grid,
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
      minHeight: 200,
    }
  }),
)


export default function Home() {
  const classes = useStyles()

  return (
    <>
      <Container maxWidth={false} className={classes.root}>
        <Grid container spacing={3}>

          <Grid item xs={12} md={6}>

            <Card variant="outlined" className={classes.card}>
                <CardContent className={classes.form}>
                  <CombatantInput />
                </CardContent>
            </Card>

          </Grid>

          <Grid item xs={12} md={6}>

            <CombatList />

          </Grid>

        </Grid>
      </Container>
    </>
  )
}
