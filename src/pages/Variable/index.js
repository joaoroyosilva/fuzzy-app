import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import * as VariableActions from '~/store/modules/variable/actions';

// import { Container } from './styles';
import AddLabel from '~/components/AddLabel';

export default function Variable() {
  const [name, setName] = useState('');
  const [showAddLabel, setShowAddLabel] = useState(false);

  const variables = useSelector(state => state.variable);
  const dispath = useDispatch();

  function handleAddVariable() {
    if (name !== '') {
      dispath(VariableActions.addVariable(name));
    }
    setName('');
  }

  function handleRemoveVariable(nameRemove) {
    dispath(VariableActions.removeVariable(nameRemove));
  }

  function handleCloseSetModal() {
    setShowAddLabel(false);
    setName('');
  }

  function handleAddLabel(variable_name) {
    setName(variable_name);
    setShowAddLabel(true);
  }

  return (
    <>
      <section className="section is-light ">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child box">
                <p className="title">New Variable</p>
                <div className="columns">
                  <div className="column">
                    <form>
                      <div className="field">
                        <label htmlFor="name" className="label">
                          Name
                        </label>
                        <div id="name" className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="Ex: Velocity"
                            value={name}
                            onChange={e => {
                              setName(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="control">
                        <button
                          className="button is-primary"
                          type="button"
                          onClick={() => {
                            handleAddVariable();
                          }}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="tile is-child box">
                <p className="title">Variables</p>
                {variables.map(variable => (
                  <div className="columns" key={variable.name}>
                    <div className="column"> {variable.name}</div>
                    <div className="column">
                      <button
                        className="button is-small is-pulled-right is-warning "
                        onClick={() => {
                          handleRemoveVariable(variable.name);
                        }}
                        type="button"
                      >
                        Remove
                      </button>
                      <button
                        className="button is-small is-pulled-right is-info"
                        onClick={() => {
                          handleAddLabel(variable.name);
                        }}
                        type="button"
                      >
                        Labels
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box">
                <p className="title">Definition</p>
                <p>
                  <strong>Variable</strong> - According to Simões and Shaw
                  (2007), a linguistic variable u in the discourse universe U is
                  the set of terms, names or labels that one, T(x), with each
                  value being a fuzzy number defined in U. Ex: T(height)=
                  {`{low, medium, high}`}
                </p>
                <p>
                  <strong>Fuzzy Number</strong> - A fuzzy number represents the
                  area of the graph formed by the dependency function.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AddLabel
        variable_name={name}
        show={showAddLabel}
        close={handleCloseSetModal}
      />
    </>
  );
}
