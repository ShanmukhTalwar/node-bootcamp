import React,{useState} from 'react'

export default function UseState() {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
      setIsToggled(!isToggled);
    };

    return (
      <div>
        <button onClick={handleToggle}>Toggle</button>
        {isToggled && <p>Toggle is ON</p>}
        {!isToggled && <p>Toggle is OFF</p>}
      </div>
    );
  };
  