import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Head from '../src/Head';
import Button from '@material-ui/core/Button';

import '../src/index.scss';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    main: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        flexDirection: 'column',
    },
    spacer: {
        marginTop: '4em',
        width: '100%',
    }
});

interface Props extends WithStyles<typeof styles> {};

export default withStyles(styles)(({ classes }: Props) => (
    <div className="landing">
        <Head />
        <CssBaseline />

        <Paper className={classes.main}>
            <h1 className="header">Help is here</h1>
            <div className="spacer" />
            <Button>Sign Up</Button>
        </Paper>
    </div>
));

