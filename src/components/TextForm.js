import React, {useState} from 'react';

console.log()

export default function TextForm(props) {

    const handleUpClick =()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange =(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    
  return (
    <div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        {/* <label for="myBox" className="form-label">Textarea Example</label> */}
        <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to UppperCase</button>
</div>
  );
}
