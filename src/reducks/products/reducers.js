import * as Actions from './actions';
import initialState from '../store/initialState';

export function ProductsReducer(state = initialState.products, action) {
  switch (action.type) {

    default:
      return state
  }
}

/*
 [ソースコード概略]
 actionsから飛ばされたデータを振り分ける
 どんな感じで飛ばされてくるのかは不明
 */