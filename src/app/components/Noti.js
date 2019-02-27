import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Noti.css';

class Noti extends React.Component {
    render() {
        if (!this.props.show)
            return null;
        return(
          <p>{this.props.message}</p>
        );
    }
}

export default Noti;