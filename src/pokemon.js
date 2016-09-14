import natures from './pokemon-nature.js'

const defaultPoint = {
  hp: 0,
  atk: 0,
  spAtk: 0,
  def: 0,
  spDef: 0,
  spd: 0
}

class Pokemon {
  constructor (options = {}) {
    // 编号
    this.id = options.id
    // 属性
    this.type = options.type || ''
    // 形态
    this.form = options.form
    // 性别
    this.gender = options.gender
    // 等级
    this.level = options.level
    // 性格
    this.nature = options.nature
    this.baseState = Object.assign({}, defaultPoint, options.baseState)
    // 个体值
    this.individual = Object.assign({}, defaultPoint, options.individual)
    // 努力值
    this.effort = Object.assign({}, defaultPoint, options.effort)
  }
  getType (id) {
    return []
  }
}
