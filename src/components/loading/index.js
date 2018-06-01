import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

import style from './style';

class Loading extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { size, color } = this.props;

        return (
            <View style={style.content}>
                <ActivityIndicator size={size} color={color} />
            </View>
        );
    }
}

export default Loading;

// Loading.propTypes = {
//     size: React.PropTypes.string,
//     color: React.PropTypes.string
// }

Loading.defaultProps = {
    size: 'large',
    color: 'gray'
};
  