import produce from 'immer';

const INITIAL_STATE = [];

export default function variable(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@variable/ADD_VARIABLE': {
        draft.push(action.payload);
        break;
      }
      case '@variable/REMOVE_VARIABLE': {
        const { name } = action.payload;
        const index = draft.findIndex(v => v.name === name);

        if (index >= 0) draft.splice(index, 1);
        break;
      }
      case '@variable/ADD_LABEL': {
        const { variable_name, ...label } = action.payload;
        const index = draft.findIndex(v => v.name === variable_name);

        if (index >= 0) draft[index].labels.push(label);
        break;
      }
      case '@variable/REMOVE_LABEL': {
        const { variable_name, name } = action.payload;
        const index = draft.findIndex(v => v.name === variable_name);

        if (index >= 0) {
          const indexLabel = draft[index].labels.findIndex(
            l => l.name === name
          );
          if (indexLabel >= 0) draft[index].labels.splice(indexLabel, 1);
          break;
        }
        break;
      }
      default:
    }
  });
}
