import React from 'react'; 
import questions from './questions.json'
import {StyleSheet, Text, Button, View } from 'react-native';
import {Card} from 'react-native-elements';

const TITLE_STATE = 0
const QUESTION_STATE = 1


class QuizQuestion extends React.Component {
  render() {
    return<>
      <Text>{this.props.question}</Text>
      <br />
      {this.props.answers.map((v, i) =>
      <Button color="#1f225e" title={v.text} onPress={()=> this.props.nextQuestion(v.correct)} key={i} />)
      }
      <br />
      </>
  }
}

class QuizPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      counter: 0,
      currentState: TITLE_STATE,
      currentQuestion: 0,
      titleText: " "
    }
  }
  nextQuestion(correct) {
    if(correct){
      this.setState({score: this.state.score+1})
    }
    if(this.state.currentQuestion === questions.length - 1) {
      console.log("DONE")
      this.setState({
        currentState: TITLE_STATE,
        score: this.state.score,
        titleText: "Quiz Completed!"
      })
    } else {
        this.setState({
        currentState: QUESTION_STATE,
        currentQuestion: this.state.currentQuestion +1
      })
    }
  }

  render() {
    return (
      <>
        <Text style={styles.endTxt}>{this.state.titleText}</Text>
        <QuizQuestion answers={questions[this.state.currentQuestion].possibleAnswers} question=
        {questions[this.state.currentQuestion].question} nextQuestion={(correct) => this.nextQuestion(correct)}
        ></QuizQuestion>
        <Text>Score: {this.state.score}</Text>
      </>
    )
  }
}

export default class App extends React.Component {
  render(){
    return (
    <View style = {styles.container}>
    <Card>
      <Text style={styles.title}>Quiz</Text>
      <QuizPage></QuizPage>
    </Card>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    backgroundColor: "#E8EFF5", 
    justifyContent: 'center', 
  }, 
  title: {
    color: "#1f225e", 
    fontSize: "30px", 
  }, 
  endTxt: {
    color: "#55b53a",
    fontSize: "20px",
  }
}); 