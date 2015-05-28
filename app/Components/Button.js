var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

class Button extends React.Component {
    render() {
      return (
        <TouchableHighlight onPress={this.props.onButtonPress} style={styles.button}>
          <Text style={styles.buttonText}>{this.props.text}</Text>
        </TouchableHighlight>
      );
    }
}

module.exports = Button;
