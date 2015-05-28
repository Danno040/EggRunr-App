var React = require('react-native');

var {
  StyleSheet,
  ListView,
  View,
  Text
} = React;

// Load Components
var OrderService = require('../Services/Order');
var OrderListRow = require('../Components/OrderListRow');
var ViewOrderScreen = require('./ViewOrder');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});

var RecentOrdersScreen = React.createClass({

  getInitialState: function() {
    var ordersDS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});

    return {
      ordersDS: ordersDS.cloneWithRows(OrderService.getRecentOrders())
    };
  },

  selectOrder: function(order) {
    this.props.navigator.push({
      title: 'Order #' + order.id,
      component: ViewOrderScreen,
      passProps: {order}
    });
  },

  renderRow: function(order) {
    return (
      <OrderListRow
        key={order.id}
        onSelect={() => this.selectOrder(order)}
        order={order} />
    );
  },

  render: function() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.ordersDS}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
});

module.exports = RecentOrdersScreen;
