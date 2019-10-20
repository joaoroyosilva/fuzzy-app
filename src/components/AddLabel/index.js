/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as VariableActions from '~/store/modules/variable/actions';

export default function AddLabel({ variable_name, show, close }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [shape, setShape] = useState('triangle');
  const variable = useSelector(
    state => state.variable.filter(item => item.name === variable_name)[0]
  );

  const dispatch = useDispatch();
  if (!show) {
    return null;
  }

  function handleAddLabel() {
    if (!name || !number) {
      alert('Invalid data');
      return;
    }
    dispatch(VariableActions.addLabel(variable_name, name, shape, number));
    setName('');
    setShape('triangle');
    setNumber('');
  }

  function handleRemoveLabel(name) {
    dispatch(VariableActions.removeLabel(variable_name, name));
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={close} />
      <div className="modal-content">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">New Label of {variable.name}</p>
          </header>
          <div className="card-content">
            <div className="columns">
              <div className="column">
                <form>
                  <div className="field">
                    <label htmlFor="name" className="label">
                      Name
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Ex: high"
                        value={name}
                        onChange={e => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="shape" className="label">
                      Shape
                    </label>
                    <div className="control">
                      <select
                        className="input"
                        type="text"
                        placeholder="Ex: 160;175;180"
                        value={shape}
                        onChange={e => {
                          setShape(e.target.value);
                        }}
                      >
                        <option value="triangle">Triangle</option>
                        <option value="trapeze" disabled>
                          Trapeze
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="number" className="label">
                      Number
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Ex: 160;175;180"
                        value={number}
                        onChange={e => {
                          setNumber(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="column">
                <div className="columns">
                  <div className="column">
                    <h5 className="title is-6">Labels</h5>
                  </div>
                </div>
                {variable.labels.map(label => (
                  <div className="columns" key="label.name">
                    <div className="column">{label.name}</div>
                    <div className="column">{label.shape}</div>
                    <div className="column">{label.number}</div>
                    <div className="column">
                      {' '}
                      <button
                        className="button is-small is-pulled-right is-warning "
                        onClick={() => {
                          handleRemoveLabel(label.name);
                        }}
                        type="button"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              <button
                className="button is-primary"
                type="button"
                onClick={() => handleAddLabel()}
              >
                Add Label
              </button>
            </div>
          </footer>
        </div>
      </div>
      <button
        className="modal-close is-large"
        type="button"
        aria-label="close"
        onClick={close}
      />
    </div>
  );
}
