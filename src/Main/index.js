import {
  FILL_SQUARE,
  ALL_VALS,
  UNITS,
} from './constants'

export default solve

/**
 * Natural[1, 9]
 * @typedef {Natural[1, 9]} Val
 */

 /**
 * (listof Val|false)
 * @typedef {(listof Val|false)} Board
 */

/**
 * Natural[0, 80]
 * @typedef {Natural[0, 80]} Pos
 */

 /**
  * (listof Pos), fix length - 9
  * @typedef {(listof Pos)} Unit
  */

  
/**
 * produce a solution for b, or false if b is unsolvable
 *
 * @param   {Board}  b
 *
 * @return  {Board|false}
 */
export function solve(b) {
  function fn_for_b(b) {
    if (solved(b)) {
      return b
    }
    return fn_for_lob(next_boards(b))
  }
  function fn_for_lob(lob) {
    if (!lob.length) {
      return false
    }

    return fn_for_b(lob[0]) || fn_for_lob(lob.slice(1))
  }
  return fn_for_b(b)
}

/**
 * produce true if board is solved
 * Assume: board is valid, so it is solved if it is full
 *
 * @param   {Board}  b
 *
 * @return  {Boolean}
 */
export function solved(b) {
  return b.every(Boolean)
}

/**
 * producd list of valid next boards from board
 * finds first empty square, fills it with [1, 9], keeps only valid boards
 *
 * @param   {Board}  b
 *
 * @return  {(listof Board)}
 */
export function next_boards(b) {
  return keep_only_valid(fill_with_1_9(find_blank(b), b))
}

/**
 * produce the position of the first blank square
 * Assume: the board has at least one blank square
 *
 * @param   {Board}  b
 *
 * @return  {Pos}
 */
export function find_blank(b) {
  if (!b.length) {
    throw new Error('The board didn\'t have a blank space.')
  }
  if (!b[0]) {
    return 0
  }
  return 1 + find_blank(b.slice(1))
}

/**
 * produce 9 boards, with blank filled with Natural[1, 9]
 *
 * @param   {Pos}  p
 * @param   {Board}  b
 *
 * @return  {(listof Board)}
 */
export function fill_with_1_9(p, b) {
  return ALL_VALS.map((v) => FILL_SQUARE(b, p, v))
}


/**
 * produce list containing only valid boards
 *
 * @param   {(listof Board)}  lob
 *
 * @return  {(listof Board)}
 */
export function keep_only_valid(lob) {
  return lob.filter(valid_board)
}

/**
 * produce true if no unit on the board has the same value twice, false otherwise
 *
 * @param   {Board}  b
 *
 * @return  {Boolean}
 */
export function valid_board(b) {
  /**
   * produce true if all the units in the board is valid
   *
   * @param   {(listof Unit)}  lou
   *
   * @return  {Boolean}
   */
  function valid_units(lou) {
    return lou.every(valid_unit)
  }

  /**
   * produce true if the given unit in the board is valid
   *
   * @param   {Unit}  u
   *
   * @return  {Boolean}
   */
  function valid_unit(u) {
    return no_duplicates(keep_only_values(read_unit(u)))
  }

  /**
   * produce a list of val or false of the unit
   *
   * @param   {Unit}  u
   *
   * @return  {(listof Val|false)}
   */
  function read_unit(u) {
    return u.map((p) => b[p])
  }

  /**
   * filter the square that hasn't no value
   *
   * @param   {(listof Val|false)}  lovf
   *
   * @return  {(listof Val)}
   */
  function keep_only_values(lovf) {
    return lovf.filter(Boolean)
  }

  /**
   * produce true if every val in the list is unique
   *
   * @param   {(listof Val)}  lov
   *
   * @return  {Boolean}
   */
  function no_duplicates(lov) {
    if (!lov.length) {
      return true
    }
    if (lov.slice(1).includes(lov[0])) {
      return false
    }
    return no_duplicates(lov.slice(1))
  }

  return valid_units(UNITS)
}
