export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
    let band = {
      name: action.name,
      id: Math.random()*1000000000
    }

      return { ...state, bands: [...state.bands, action.name] }

    default:
      return state;
  }
};
