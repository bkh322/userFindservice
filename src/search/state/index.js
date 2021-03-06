  
import {
    createReducer,
    createSetValueAction,
    setValueReducer,
  } from '../../common/redux-helper';
  
  export const Types = {
    SetValue: 'search/SetValue',
  };
  
  export const actions = {
    setValue: createSetValueAction(Types.SetValue),
  };
  
  const INITIAL_STATE = {
    keyword: '',
    autoCompletes: [],
  };
  const reducer = createReducer(INITIAL_STATE, {
    [Types.SetValue]: setValueReducer,
  });
  export default reducer;