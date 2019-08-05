import React, { Component, createContext } from 'react';

const Context = createContext();

export class Provider extends Component {
  state = {
    logged_in: false
  }

  setAuthState = (val) => {
    this.setState({
      logged_in: val
    });
  }

  render() {
    return (
      <Context.Provider value={{
        ...this.state,
        setAuthState: this.setAuthState
      }}>{this.props.children}</Context.Provider>
    )
  }
}

export function connectStore(DependentComponent) {
  return class extends Component {
    render() {
      return (
        <Context.Consumer>
          {context => {
            const props = { ...context, ...this.props };
            return <DependentComponent {...props} />
          }}
        </Context.Consumer>
      )
    }
  }
}
