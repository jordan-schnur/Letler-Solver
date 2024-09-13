import React, {useState, useEffect} from 'react';
import {Button, Typography, Container, Box, ThemeProvider} from '@mui/material';
import {createTheme} from '@mui/material/styles';
import DaysSinceDate from "./components/days-since/DaysSinceDate";
import {words} from './components/words';

const theme = createTheme({
    typography: {
        fontFamily: `"Montserrat", sans-serif`,
        fontWeightRegular: 700,
        fontWeightBold: 900,
        body1: {
            fontWeight: 700,
        },
        h1: {
            fontWeight: 900,
        },
        h2: {
            fontWeight: 900,
        },
        h2: {
            fontWeight: 900,
        },
    },
});


function App() {
    const [guess, setGuess] = useState('');
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(words.length - 1);
    const [message, setMessage] = useState('Welcome to Letler Solver!');
    const [pastWords, setPastWords] = useState(['hate', 'head', 'heal', 'helm', 'herb', 'hike', 'hype']);

    const binarySearch = (direction) => {
        let mid = Math.floor((left + right) / 2);
        if (direction === 'c') {
            setMessage(`Great! We found your word! It is ${words[mid]}`);
            return;
        }
        if (direction === 'b') {
            setRight(mid - 1);
        } else if (direction === 'a') {
            setLeft(mid + 1);
        }
        if (left <= right) {
            mid = Math.floor((left + right) / 2);
            setGuess(words[mid]);
            setMessage(`Is your word ${words[mid]}?`);
        } else {
            setMessage("I couldn't find your word. Let's try again!");
            resetGame();
        }
    };

    const resetGame = () => {
        setLeft(0);
        setRight(words.length - 1);
        setGuess('');
        setMessage('Welcome to Letler Solver!');
    };

    useEffect(() => {
        if (left <= right) {
            const mid = Math.floor((left + right) / 2);
            setGuess(words[mid]);
            setMessage(`Is your word ${words[mid]}?`);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm" sx={{mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <DaysSinceDate/>
                <Typography variant="h4" gutterBottom>
                    Letler Solver
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {message}
                </Typography>
                {guess && (
                    <Box sx={{mt: 2, '& > *': {m: 1}}}>
                        <Button variant="contained" color="primary" onClick={() => binarySearch('b')}>
                            Before
                        </Button>
                        <Button variant="contained" color="secondary" onClick={() => binarySearch('c')}>
                            Correct
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => binarySearch('a')}>
                            After
                        </Button>
                    </Box>
                )}
                <Box mt={4}>
                    <Button variant="outlined" color="primary" onClick={resetGame}>
                        Reset Game
                    </Button>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default App;