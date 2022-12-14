import { autorun, makeAutoObservable, reaction } from 'mobx'

class Global {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }
  /**
   * data
   */
  count = 0
  /**
   * computed
   */
  get double() {
    return this.count * 2
  }
  /**
   * 异步
   */
  addCountAsync() {
    setTimeout(this.addCount, 2000)
  }
  /**
   * 同步
   */
  addCount() {
    this.count++
  }
  minusCount() {
    this.count--
  }
}

const global = new Global()
/**
 * 监听
 */
autorun(() => {
  console.log(global.count)
})
reaction(
  () => global.count,
  (value, oldValue) => {
    console.log(value)
  }
)
export default global
