import React, { Component } from 'react';
import logo from '../../resources/logo.svg';
import * as css from './app.module.css';
console.log('asdasd', css);

class App extends Component {
  render() {
    return (
      <div className={css.container}>
        <header className={css.header}>
          <img src={logo} className={css.logo} alt="logo" />
          <h1 className={css.title}>Welcome to React</h1>
        </header>
        <p className={css.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export { App };
