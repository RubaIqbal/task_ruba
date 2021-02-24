import React, { useState } from 'react';
import "../App.css";


const LIST = { 
    "Python Dev": {
    name: 'Python Dev',
    value: "Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation.Python is developed under an OSI-approved open source license, making it freely usable and distributable, even for commercial use. Python's license is administered by the Python Software Foundation.",
    },
    "Android": {
    name: 'Android',
    value: 'Android is a mobile operating system based on a modified version of the Linux kernel and other open source software, designed primarily for touchscreen mobile devices such as smartphones and tablets.9',
    },
}


const TextComp2  = () => {

    const[selected, setSelected] =useState("Python Dev");

  const handleChange = (event) => {
    setSelected(event.target.value);

  };

    return (
      <div>
        <select onChange={handleChange} value={selected}>
            <optgroup label="Python">
            {Object.keys(LIST).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
          </optgroup>
        </select>
        <p className="para-text">{LIST[selected].value}</p>
      </div>
    );
  }

export default TextComp2
