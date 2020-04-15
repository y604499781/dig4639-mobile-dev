import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Card, Input, Button } from 'react-native-elements';

export default class ProfileScreen extends React.Component {
  state = {profileName: [], profileName: []}
  focusListener = undefined

  constructor(props) {
    super(props)
    this.state = {
      submitDisabled: true,
      contactName: "",
      contactNumber: "none",
    }
    this.focusListener = props.navigation.addListener('focus', 
      () => this.componentGainsFocus())
  }
  handleTextInput(text) {
    if(text.length > 0) {
      this.setState(
        {
          submitDisabled: false,
          contactName: text
        }
      )
    } else {
      this.setState({submitDisabled: true})
    }
  }
  handleCreateTask() {
    console.log("Added")
    fetch('http://plato.mrl.ai:8080/contacts/add', {
      method: "POST",    
      headers: {
        "API":"chen",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(
        {
          name: this.state.contactName,
          number: this.state.contactNumber
        }
      )
    })
      .then(res => res.json())
      .then(body => {
        console.log(body)
        if(body.added != undefined) {
          console.log("Task added!")
          this.props.navigation.navigate('Contacts')
        } else {
          console.log("error adding task")
        }
      })
  }
  handlePriorityInput(text) {
    if(text.length > 0) {
      this.setState(
        {
          submitDisabled: false,
          contactNumber: text
        }
      )
    } else {
      this.setState({submitDisabled: true})
    }
  }
  profileContent() {
    fetch('http://plato.mrl.ai:8080/profile', {
      method: "GET",    
      headers: {
        "API":"chen",
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(body => {
        this.setState({
          profileName: body.name,
          profileCount: body.count
        })
      })
  }
  componentGainsFocus() {
    this.profileContent()
  }
  componentWillUnmount() {
    this.props.navigation.removeListener('focus', () => this.componentGainsFocus)
  }
  componentDidMount() {
    this.profileContent()
  }

  render() {
    return (
      <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {       
        <Card title="Profile" titleStyle={styles.card}>
            <Text style={styles.profileText}>Profile Name:     {this.state.profileName}</Text>
            <Text style={styles.profileText}>List Length:       {this.state.profileCount}</Text>
        </Card>
        }
        <Card title="Add new contact" titleStyle={styles.card}>
          <Input placeholder="Name (e.g. Harry Potter)"
            onChangeText={text => this.handleTextInput(text)} />
          <Input placeholder="Number"
            onChangeText={text => this.handlePriorityInput(text)} />
          <Button style={styles.addButton} title="Add"
            disabled={this.state.submitDisabled}
            onPress={()=> this.handleCreateTask()} />
        </Card>
      </ScrollView>
      </View>
    );
  }
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89c4c0',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  profileText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'lucida grande',
    color: '#231f82',
  },
  addButton: {
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  card: {
    fontSize: 26,
    color: '#4d9e6a',
    fontFamily: 'lucida grande',
  },
});
