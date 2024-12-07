import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

const Trivia = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [questionCount, setQuestionCount] = useState(5);

  const api = API_URL;

  // Fetch questions from the backend
  useEffect(() => {
    axios
      .get(`${api}/questions?length=${questionCount}`)
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, [questionCount]);

  // Handle user's answer selection
  const handleAnswer = (index) => {
    setUserAnswers([...userAnswers, index]);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  // Reset the quiz
  const resetQuiz = () => {
    setCurrentIndex(0);
    setUserAnswers([]);
    setIsFinished(false);
  };

  // Calculate the score
  const calculateScore = () => {
    return userAnswers.filter(
      (answer, idx) => answer === questions[idx].correctAnswer
    ).length;
  };

  // Share results to social media
  const shareResults = () => {
    const score = calculateScore();
    const text = `I scored ${score} out of ${questions.length} in the Security Trivia! Can you beat my score?`;
    const url = "http://localhost:5173"; // Replace with your actual link
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(url)}`
    );
  };

  // Styles
  const styles = {
    container: {
      padding: "20px",
      margin: "auto",
      maxWidth: "600px",
      textAlign: "center",
      fontFamily: "'Roboto', sans-serif",
    },
    questionBox: {
      padding: "20px",
      marginBottom: "20px",
      borderRadius: "15px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
    header: {
      fontWeight: "700",
    },
    button: {
      padding: "12px 20px",
      margin: "10px 5px",
      borderRadius: "8px",
      backgroundColor: "transparent",
      // color: "white",
      fontWeight: "600",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    retryButton: {
      backgroundColor: "#27ae60",
    },
    options: {
      listStyleType: "none",
      padding: 0,
    },
    option: {
      margin: "10px 0",
      padding: "15px",
      backgroundColor: "transparent",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "1.1em",
      fontWeight: "500",
      transition: "background-color 0.3s ease-in-out",
    },
    optionHover: {
      backgroundColor: "#2980b9",
    },
    responsiveText: {
      fontSize: "1.2em",
    },
    scoreText: {
      fontWeight: "700",
    },
  };

  // Show results if the quiz is finished
  if (isFinished) {
    const score = calculateScore();
    return (
      <div style={styles.container}>
        <h2 style={styles.scoreText}>
          Your Score: {score} / {questions.length}
        </h2>
        <p>
          <strong>Security Advice:</strong> Always use strong passwords, enable
          two-factor authentication, and avoid clicking on suspicious links.
        </p>
        <button
          style={{ ...styles.button, ...styles.retryButton }}
          onClick={resetQuiz}
        >
          Retry
        </button>
        <button style={styles.button} onClick={shareResults}>
          Share on Twitter
        </button>
      </div>
    );
  }

  // Show loading state if questions are not yet loaded
  if (questions.length === 0) {
    return (
      <div style={styles.container}>
        <h2>Loading questions...</h2>
      </div>
    );
  }

  // Display the current question and options
  const currentQuestion = questions[currentIndex];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Security Trivia</h1>
      <div style={styles.questionBox}>
        <h2 style={styles.responsiveText}>{currentQuestion.question}</h2>
        <ul style={styles.options}>
          {currentQuestion.options.map((option, idx) => (
            <li
              key={idx}
              style={styles.option}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.optionHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.option.backgroundColor)
              }
              onClick={() => handleAnswer(idx)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
      <p>
        Question {currentIndex + 1} of {questions.length}
      </p>
    </div>
  );
};

export default Trivia;


// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';


// const Trivia = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [userAnswers, setUserAnswers] = useState([]);
//   const [isFinished, setIsFinished] = useState(false);
//   const [questionCount, setQuestionCount] = useState(5); // Default question count
//   const [isHovered, setIsHovered] = useState(false);
//   const handleMouseEnter = () => setIsHovered(true);
//   const handleMouseLeave = () => setIsHovered(false);


//   const api = API_URL;

//   // Fetch questions from the backend
//   useEffect(() => {
//     console.log("Fetching questions from:", `${api}/questions?length=${questionCount}`);
//     axios
//       .get(`${API_URL}/questions?length=${questionCount}`)
//       .then((response) => {
//         console.log("Received questions:", response.data);
//         setQuestions(response.data);
//       })
//       .catch((error) => console.error("Error fetching questions:", error));
//   }, [questionCount]);

//   // Handle user's answer selection
//   const handleAnswer = (index) => {
//     setUserAnswers([...userAnswers, index]);
//     if (currentIndex + 1 < questions.length) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       setIsFinished(true);
//     }
//   };

//   // Reset the quiz
//   const resetQuiz = () => {
//     setCurrentIndex(0);
//     setUserAnswers([]);
//     setIsFinished(false);
//   };

//   // Calculate and display the score
//   const calculateScore = () => {
//     return userAnswers.filter(
//       (answer, idx) => answer === questions[idx].correctAnswer
//     ).length;
//   };

//   // Share results to social media
//   const shareResults = () => {
//     const score = calculateScore();
//     const text = `I scored ${score} out of ${questions.length} in the Security Trivia! Can you beat my score?`;
//     const url = "http://localhost:5173"; // Replace with your actual link
//     window.open(
//       `https://twitter.com/intent/tweet?text=${encodeURIComponent(
//         text
//       )}&url=${encodeURIComponent(url)}`
//     );
//   };

//   // Styling for better colors, interactivity, and responsiveness
//   const styles = {
//     container: {
//       padding: "20px",
//       margin: "auto",
//       maxWidth: "600px",
//       textAlign: "center",
//       fontFamily: "'Roboto', sans-serif",
//     },
//     questionBox: {
//       padding: "20px",
//       marginBottom: "20px",
//       // backgroundColor: "#f7fbfc",
//       borderRadius: "15px",
//       boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//     },
//     header: {
//       // color: "#2c3e50",
//       fontWeight: "700",
//     },
//     button: {
//       display: "inline-block",
//       padding: "12px 20px",
//       margin: "10px 5px",
//       border: "none",
//       borderRadius: "8px",
//       // backgroundColor: "#3498db",
//       // color: "white",
//       fontWeight: "600",
//       cursor: "pointer",
//       transition: "background-color 0.3s",
//     },
//     buttonHover: {
//       // backgroundColor: "#2980b9",
//     },
//     retryButton: {
//       // backgroundColor: "#27ae60",
//     },
//     retryButtonHover: {
//       // backgroundColor: "#2ecc71",
//     },
//     options: {
//       listStyleType: "none",
//       padding: 0,
//     },
//     option: {
//       margin: "10px 0",
//       padding: "15px",
//       // backgroundColor: "#ecf0f1",
//       borderRadius: "10px",
//       cursor: "pointer",
//       fontSize: "1.1em",
//       fontWeight: "500",
//       transition: "all 0.3s ease-in-out",
//     },
//     optionHover: {
//       backgroundColor: "darkblue",
//       transition: "all 0.3s ease-in-out",
//     },
//     responsiveText: {
//       fontSize: "1.2em",
//     },
//     scoreText: {
//       // color: "#8e44ad",
//       fontWeight: "700",
//     },
//   };

//   // Show results if the quiz is finished
//   if (isFinished) {
//     const score = calculateScore();
//     return (
//       <div style={styles.container}>
//         <h2 style={styles.scoreText}>Your Score: {score} / {questions.length}</h2>
//         <p>
//           <strong>Security Advice:</strong> Always use strong passwords, enable
//           two-factor authentication, and avoid clicking on suspicious links.
//         </p>
//         <button
//           style={{ ...styles.button, ...styles.retryButton }}
//           onClick={resetQuiz}
//         >
//           Retry
//         </button>
//         <button
//           style={styles.button}
//           onClick={shareResults}
//         >
//           Share on Twitter
//         </button>
//       </div>
//     );
//   }

//   // Show loading state if questions are not yet loaded
//   if (questions.length === 0) {
//     return (
//       <div style={styles.container}>
//         <h2>Loading questions...</h2>
//       </div>
//     );
//   }

//   // Display the current question and options
//   const currentQuestion = questions[currentIndex];

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.header}>Security Trivia</h1>
//       <div style={styles.questionBox}>
//         <h2 style={styles.responsiveText}>{currentQuestion.question}</h2>
//         <ul style={styles.options}>
//           {currentQuestion.options.map((option, idx) => (
//             <li
//               key={idx}
//               style={isHovered ? optionHover : optionDefault. styles.option}
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
              
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = styles.optionHover.backgroundColor;
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = styles.option.backgroundColor;
//               }}
//               onClick={() => handleAnswer(idx)}
          
              
//             >
//               {option}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <p>
//         Question {currentIndex + 1} of {questions.length}
//       </p>
//     </div>
//   );
// };

// export default Trivia;

