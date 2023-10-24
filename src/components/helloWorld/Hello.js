import { useEffect, useState } from 'react';
const Hello = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');
  const onClick = () => {
    setToggle((prev) => !prev);
  };
  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  });
  return (
    <div className="App">
      <h1 data-testid="input-value">{value}</h1>
      {data && (
        <div style={{ color: 'red' }} data-testid="value-elem">
          data
        </div>
      )}
      {toggle && <div data-testid="toggle-elem">toggle</div>}
      <h1>Hello world!</h1>
      <button onClick={onClick} data-testid="toggle-btn">
        Click me
      </button>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="input value ..."
      />
    </div>
  );
};

export default Hello;
