import { Typography } from '@material-ui/core';
import React from 'react';

class WelcomePage extends React.Component {

    render() {
        const { t, setting } = this.props;
        return (
            <div>
                <Typography variant="h3">Welcome !</Typography>
            </div>
        );
    };
}


export default (WelcomePage);