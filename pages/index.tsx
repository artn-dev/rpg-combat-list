import CombatantInput from '../components/CombatantInput'
import CombatList from '../components/CombatList'
import {
  Container,
  Theme,
  Tabs,
  Tab,
  Box,
  Typography,
  Tooltip
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useState, ReactNode, ChangeEvent } from 'react'


const tabsWidth = 60


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: "100vh",
      display: "flex",
    },
    root: {
      flexGrow: 1,
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    tabs: {
      width: tabsWidth,
      borderRight: `1px solid ${theme.palette.divider}`,
      height: "100%",
      boxShadow: theme.shadows[4],
    },
    tab: {
      minWidth:tabsWidth,
    },
    tabPanel: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }
  }),
)


interface TabPanelProps {
  children: ReactNode
  index: any
  value: any
}


const TabPanel = (props: TabPanelProps) => {
  const { children, index, value, ...other } = props
  const classes = useStyles()

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={classes.tabPanel}
      {...other}
      >
        { value === index && (
          <Box p={3}>
            <Typography component="div">{children}</Typography>
          </Box>
        ) }
      </div>
  )
}

const tabprops = (index: number) => ({
  id: `vertical-tab${index}`,
  "aria-controls": `vertical-tabpanel-${index}`
})

const Home = () => {
  const classes = useStyles()
  const [openTab, setOpenTab] = useState(0)

  const changeTab = (event: ChangeEvent<HTMLInputElement>, newValue: number) => {
    setOpenTab(newValue)
  }

  return (
    <div className={classes.container}>
      <Tabs
        value={openTab}
        onChange={changeTab}
        orientation="vertical"
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        className={classes.tabs}
      >
        <Tooltip title="See List" placement="right">
          <Tab icon={<MenuIcon />} className={classes.tab} {...tabprops(0)} />
        </Tooltip>
        <Tooltip title="Add" placement="right">
          <Tab icon={<AddIcon />}  className={classes.tab} {...tabprops(1)} />
        </Tooltip>
      </Tabs>

      <Container maxWidth="sm" className={classes.root}>
        <TabPanel value={openTab} index={0}>
          <CombatList />
        </TabPanel>
        <TabPanel value={openTab} index={1}>
          <CombatantInput />
        </TabPanel>
      </Container>
    </div>
  )
}

export default Home
