import React, {useState} from 'react';

const InputElement = () => {

  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);

  return <div>
    <input  
      onChange={(e) => {
        setInputText(e.target.value);
        setHistoryList([...historyList, e.target.value])
      }}
      placeholder="enter"
    />
      <br/>
      {inputText}
      <ul>
        {
          historyList.map((item) => {
            return <li>{item}</li>
          })
        }
      </ul>
  </div>
}

export default InputElement;