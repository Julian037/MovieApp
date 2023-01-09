import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
container: {
    color: '#fff',
    backgroundColor: '#032541',
    maxWidth: '100%',
    width: '100vw',
    boxSizing: 'border-box',
    padding: '0',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'space-between',
    justifyContent: 'center',
},
nav: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '80px',
    paddingBottom: '80px',
},
}))

export default useStyles