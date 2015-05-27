'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
} = React;

var ViewOrderScreen = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>
          #{this.props.order.id}:
        </Text>
        <Text>
          {this.props.order.eggs} Eggs
        </Text>
        <Text>
          {this.props.order.confirmed ? 'Confirmed' : 'Unconfirmed'}
        </Text>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
});

module.exports = ViewOrderScreen;
