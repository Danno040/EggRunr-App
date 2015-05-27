var React = require('react-native');

var Button = require('../Components/Button');
var RecentOrdersScreen = require('./RecentOrders');
var OrderEggsScreen = require('./OrderEggs');

var {
  View,
  Text,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    backgroundColor: '#48BBEC',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
  },
});

class Main extends React.Component {
    render() {
      return (
        <View style={styles.mainContainer}>
          <Text style={styles.title} onPress={this.showOrderEggsScreen}>Welcome To EggRunr!</Text>
          <Button text={'Order Some Eggs'} onButtonPress={() => this.showOrderEggsScreen()}></Button>
          <Button text={'Review Previous Orders'} onButtonPress={() => this.showPreviousOrdersScreen()}></Button>
          <Button text={'Update Billing Info'}></Button>
        </View>
      )
    }

    showOrderEggsScreen() {
      this.props.navigator.push({
        title: 'Order Eggs',
        component: OrderEggsScreen,
      });
    }

    showPreviousOrdersScreen() {
      this.props.navigator.push({
        title: 'Recent Orders',
        component: RecentOrdersScreen,
      });
    }
};

module.exports = Main;
