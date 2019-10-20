export function addVariable(name) {
  return {
    type: '@variable/ADD_VARIABLE',
    payload: { name, labels: [] },
  };
}

export function removeVariable(name) {
  return {
    type: '@variable/REMOVE_VARIABLE',
    payload: { name },
  };
}

export function addLabel(variable_name, name, shape, number) {
  return {
    type: '@variable/ADD_LABEL',
    payload: { variable_name, name, shape, number },
  };
}

export function removeLabel(variable_name, name) {
  return {
    type: '@variable/REMOVE_LABEL',
    payload: { variable_name, name },
  };
}
