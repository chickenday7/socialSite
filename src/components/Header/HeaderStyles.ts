import {createStyles, makeStyles, Theme} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
            marginRight:'10px'
        },
        buttonLogout:{
            background:'#CBD9DB',
            color:'red',
            height: '20px',
            boxShadow:theme.shadows[2]
        },buttonLogin:{
            background:'#CBD9DB',
            color:'#1EBBD7',
            height: '20px',
            boxShadow:theme.shadows[2],
            textDecoration:'none',
        }

    }),
);