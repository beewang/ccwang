import { combineReducers } from 'redux'

import app from './app/app.module'
import board from './portfolio/board/board.module'
// import auth from './modules/auth/auth.module'
// import fuelPurchases from './modules/fuelPurchases/fuelPurchases.module'

export default combineReducers({
  app,
  board,
})
