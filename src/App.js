import './App.css';
import { Configuration, OpenAIApi } from 'openai';

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.REACT_APP_API_KEY
}));

openai.createChatCompletion({
  model: 'gpt-3.5-turbo',
  messages: [{ role: 'user', content: 'Bozo moment' }]
}).then(res => {
  console.log(res.data.choices[0].message.content)
})

function App() {
  return (
    <>
      <h1>
        Name Generator
      </h1>
    </>
  );
}

export default App;
