import produce from 'immer';

export default function cart(state = [], action) {
  console.tron.log(action);
  console.tron.log(state);

  switch (action.type) {
    case '@cart/ADD_TO_CART':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        return state;
      }
      return produce(state, draft =>{
        const productIndex = draft.findIndex(p => p.id === action.id);

        if(productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    case '@cart/REMOVE_FROM_CART':
      return produce(state, draft =>{
        const productIndex = draft.findIndex(p => p.id === action.id);

        if(productIndex <= 0) draft.splice(productIndex, 1);
      });

    default:
      return state;
  }
}