
import $Store from '../Store.js'
class PlayerService{
  increaseScore(num){
    $Store.state.score += num
    if($Store.state.score >= 25){
      $Store.state.stage = 2
    }
  }
}
export const playerService = new PlayerService()