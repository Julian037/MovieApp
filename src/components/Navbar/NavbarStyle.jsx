import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({

buttonsContainerModal: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '24px',
    // [theme.breakpoints.down('xs')]: {
    //     justifyContent: 'space-around',
    // },
},
container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    height: '64px',
    top: '0',
    left: '0',
    backgroundColor: '#032541',
    zIndex: '10',
    color: '#fff',
    // [theme.breakpoints.down('xs')]: {
    //     justifyContent: 'space-around',
    // },
},
iconNavbar: {
    width: '154px',
    height: '20px',
    // backgroundImage: `url(${icon})`,
    // [theme.breakpoints.down('xs')]: {
    //     justifyContent: 'space-around',
    // },
},
navText: {
    color: '#fff'
    // backgroundImage: `url(${icon})`,
    // [theme.breakpoints.down('xs')]: {
    //     justifyContent: 'space-around',
    // },
},

contet: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    
},
sub_media: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    top: '0',
    left: '0',
    maxWidth: 'var(--maxPrimaryPageWidth)',
    width: '100%',
    padding: '0 40px',
 
},
nav_wrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    alignItems: 'center',
    overflow: 'visible',
    
},
nav_icons: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'flex-end',
   
},
}));

export default useStyles