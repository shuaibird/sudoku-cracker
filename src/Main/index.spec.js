import {
  R_C_POS,
  FILL_SQUARE,
  ALL_VALS,
  BD1,
  BD2,
  BD3,
  BD4,
  BD4s,
  BD7,
} from './constants'
import {
  solve,
  solved,
  next_boards,
  find_blank,
  fill_with_1_9,
  keep_only_valid,
  valid_board,
} from './index'

describe('Main', () => {
  it('solve', () => {
    expect(solve(BD4)).toEqual(BD4s)
    expect(solve(BD7)).toBe(false)
  })
  
  it('solved', () => {
    expect(solved(BD4)).toEqual(false)
    expect(solved(BD4s)).toEqual(true)
  })

  it('next_boards', () => {
    expect(next_boards(BD1)).toEqual(ALL_VALS.map((v) => FILL_SQUARE(BD1, 0, v)))
    expect(next_boards(BD2)).toEqual([4, 5, 6, 7, 8, 9].map((v) =>
      FILL_SQUARE(BD2, R_C_POS(1, 0), v)
    ))
    expect(next_boards(BD3)).toEqual([4, 5, 6, 7, 8, 9].map((v) =>
      FILL_SQUARE(BD3, R_C_POS(0, 1), v)
    ))
  })

  it('find_blank', () => {
    expect(find_blank(BD1)).toBe(0)
    expect(find_blank(BD2)).toBe(R_C_POS(1, 0))
  })

  it('fill_with_1_9', () => {
    expect(fill_with_1_9(0, BD1)).toEqual(ALL_VALS.map((v) => FILL_SQUARE(BD1, 0, v)))
  })

  it('keep_only_valid', () => {
    expect(keep_only_valid([[1, 1, ...BD1.slice(2)]])).toEqual([])
  })

  it('valid_board', () => {
    expect(valid_board(BD1)).toBe(true)
    expect(valid_board(BD2)).toBe(true)
    expect(valid_board(BD3)).toBe(true)
    expect(valid_board(BD4)).toBe(true)
    expect(valid_board(BD4s)).toBe(true)
    expect(valid_board([1, 1, ...BD1.slice(2)])).toBe(false)
    expect(valid_board(FILL_SQUARE(BD2, R_C_POS(1, 0), 1))).toBe(false)
    expect(valid_board(FILL_SQUARE(BD2, R_C_POS(1, 0), 2))).toBe(false)
    expect(valid_board(FILL_SQUARE(BD3, R_C_POS(0, 1), 1))).toBe(false)
    expect(valid_board(FILL_SQUARE(BD3, R_C_POS(0, 1), 2))).toBe(false)
  })
})