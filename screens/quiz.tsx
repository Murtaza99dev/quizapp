
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([])
  const [score, setScore] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const getQuiz = async () => {
    setIsLoading(true)
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]))
    setIsLoading(false)
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const handleNextPress = () => {
    setQues(ques + 1)
    setOptions(generateOptionsAndShuffle(questions[ques + 1]))
  }

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers]
    options.push(_question.correct_answer)

    shuffleArray(options)

    return options
  }

  const handlSelectedOption = (_option) => {
    if (_option === questions[ques].correct_answer) {
      setScore(score + 5)
    }
    if (ques !== 9) {
      setQues(ques + 1)
      setOptions(generateOptionsAndShuffle(questions[ques + 1]))
    }
    if (ques === 9) {
      handleShowResult()
    }
  }

  const handleShowResult = () => {
    navigation.navigate('Result', {
      score: score
    })
  }

  return (
    <View
      style={{
        paddingTop: 40,
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: "100%",
      }}
    >
      {questions && (
        <View style={{ height: "100%" }}>
          <View style={{ marginVertical: 16 }}>
            <Text style={{ fontSize: 30, fontWeight: "600" }}>
              Q. {decodeURIComponent(questions[ques].question)}
            </Text>
          </View>

          <View style={{ marginVertical: 16, flex: 1, gap: 15 }}>
            <TouchableOpacity
              onPress={()=>handlSelectedOption(options[0])}

              style={{
                backgroundColor: "magenta",
                paddingVertical: 10,
                borderRadius: 15,
              }}
            >
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 20 }}
              >
                {decodeURIComponent(options[0])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>handlSelectedOption(options[1])}
              style={{
                backgroundColor: "magenta",
                paddingVertical: 10,
                borderRadius: 15,
              }}
            >
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 20 }}
              >
                {decodeURIComponent(options[1])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>handlSelectedOption(options[2])}
              style={{
                backgroundColor: "magenta",
                paddingVertical: 10,
                borderRadius: 15,
              }}
            >
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 20 }}
              >
                {decodeURIComponent(options[2])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>handlSelectedOption(options[3])}
              style={{
                backgroundColor: "magenta",
                paddingVertical: 10,
                borderRadius: 15,
              }}
            >
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 20 }}
              >
                {decodeURIComponent(options[3])}
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            {ques !== 9 && <TouchableOpacity style={{
              backgroundColor: '#1A759F',
              padding: 12,
              paddingHorizontal: 16,
              borderRadius: 16,
              alignItems: 'center',
              marginBottom: 30,
            }} onPress={handleNextPress}>
              <Text style={{
                fontSize: 18,
                fontWeight: '600',
                color: 'white',
              }}>SKIP</Text>
            </TouchableOpacity>}

            {ques === 9 && <TouchableOpacity style={{
              backgroundColor: '#1A759F',
              padding: 12,
              paddingHorizontal: 16,
              borderRadius: 16,
              alignItems: 'center',
              marginBottom: 30,
            }} onPress={handleShowResult}>
              <Text style={{
                fontSize: 18,
                fontWeight: '600',
                color: 'white',
              }}>SHOW RESULTS</Text>
            </TouchableOpacity> }
          </View>

        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({});
