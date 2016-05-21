import {random} from 'lodash/number'

export const randomAge = () => {
  return random(1, 2000).toLocaleString()
}
