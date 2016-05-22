import {sampleSize} from 'lodash/collection'

export const selectDragons = (arr, num) => {
  return sampleSize(arr, num)
}
