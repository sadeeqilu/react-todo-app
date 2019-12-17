import React from 'react';

function Header() {
  return (
    <div>
      <header style={headerStyle}>
        <h2> TodoList </h2>
      </header>
    </div>
  );
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default Header;
