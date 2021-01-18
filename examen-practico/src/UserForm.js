import React , { useContext, useState } from "react";

 export const myContext = React.createContext(null);

const Form = () => {
  const { onChange } = useContext(myContext);
  const [input, setInput] = useState({
    name:" ",
    location:" "
  });

  return (
    <div className="user-form">
      <div className="input-item">
        <label className="label">Nombre:</label>
        <input className="input" value={input.name}
        onChange={e => {
          setInput({...input,name:e.target.value});
          onChange({...input, name:e.target.value});
        }}
        
        />
      </div>

      <div className="input-item">
        <label className="label">Ubicación:</label>
        <input className="input"  value={input.location}
        onChange={e => {
          setInput({...input, location:e.target.value});
          onChange({...input, location:e.target.value});
        }}
         />
      </div>
    </div>
  );
};

export default Form;
