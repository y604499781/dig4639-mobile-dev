import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Input, Button } from 'react-native-elements';

export default class AddTaskScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      submitDisabled: true,
      taskText: "",
      taskPriority: 0
    }
  }
  handleTextInput(text) {
    if(text.length > 0) {
      this.setState(
        {
          submitDisabled: false,
          taskText: text
        }
      )
    } else {
      this.setState({submitDisabled: true})
    }
  }
  handleCreateTask() {
    console.log("Added")
    fetch('http://plato.mrl.ai:8080/todo/add', {
    method: "POST",    
    headers: {
          "API":"chen",
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(
          {
            text: this.state.taskText,
            priority: this.state.taskPriority
          }
        )
    })
      .then(res => res.json())
      .then(body => {
        console.log(body)
        if(body.added != undefined) {
          console.log("Task added!")
          const currentList = [...this.state.todoList]
          currentList[position].completed = this.state
          this.setState({todoList: currentList})
        } else {
          console.log("error adding task")
        }
        //this.setState({todoList:body.todo})
      })
  }
  handlePriorityInput(text) {

  }
  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Input placeholder="e.g. final project"
          onChangeText={text => this.handleTextInput(text)} />
        <Input placeholder="Priority"
          onChangeText={text => this.handlePriorityInput(text)} />
        <Button title="create"
          disable={this.state.submitDisabled}
          onPress={()=> this.handleCreateTask()} />
      </ScrollView>
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
    backgroundColor: '#fafafa',
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
});
