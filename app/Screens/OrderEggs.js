var React = require('react-native');

var Button = require('../Components/Button');

var {
  View,
  Text,
  StyleSheet,
  SegmentedControlIOS
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
  countSelector: {
    backgroundColor: 'white',
    borderColor: 'black',
    color: 'black',
    borderRadius: 5,
  }
});

class OrderEggs extends React.Component {
    render() {
      return (
        <View style={styles.mainContainer}>
          <Text style={styles.title} onPress={this.showOrderEggsScreen}>Order Some Eggs!</Text>
          <SegmentedControlIOS tintColor="#000" style={styles.countSelector} values={['Six', 'A Dosen', 'Two Dosen']}
            selectedIndex={0} />
          <Button text={'Order These Eggs'}></Button>
        </View>
      );
    }
};

module.exports = OrderEggs;
