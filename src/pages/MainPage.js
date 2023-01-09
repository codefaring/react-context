import React, { useContext } from 'react';
import '../App.css';
import { ModeContext } from '../context/ModeContext';

export default function MainPage() {
  return (
    <main>
      Main Home
      <Member />
      <Show />
    </main>
  );
}

function Member() {
  return (
    <div>
      Member info
      <User />
    </div>
  );
}

function User() {
  return <div> user info</div>;
}

function Show() {
  const { mode, toggleButton } = useContext(ModeContext);
  return (
    <div>
      <p>Check Mode : {mode.toString()}</p>
      <button onClick={() => toggleButton()}>Change Mode</button>
    </div>
  );
}
