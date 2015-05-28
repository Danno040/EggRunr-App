'use strict';

var React = require('react-native');
var {
  StyleSheet,
  TouchableHighlight,
  View,
  Text
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)'
  },
  orderId: {
    fontSize: 20,
    marginRight: 10
  },
  eggCount: {
    fontSize: 20,
    marginRight: 10
  },
  confirmation: {
    color: 'green'
  }
});

var OrderListRow = React.createClass({
  render: function() {
    return (
      <TouchableHighlight underlayColor={'rgba(0, 0, 0, 0.1)'} onPress={this.props.onSelect}>
        <View style={styles.container}>
          <Text style={styles.orderId}>
            #{this.props.order.id}:
          </Text>
          <Text style={styles.eggCount}>
            {this.props.order.eggs} Eggs
          </Text>
          <Text style={styles.confirmation}>
            {this.props.order.confirmed ? 'Confirmed' : 'Unconfirmed'}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
});

module.exports = OrderListRow;
