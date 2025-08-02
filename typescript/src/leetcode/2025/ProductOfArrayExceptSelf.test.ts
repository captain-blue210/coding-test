import { describe, expect, it } from 'vitest';
import { productExceptSelf } from './ProductOfArrayExceptSelf';

describe('productExceptSelf', () => {
  it('例1: 自分以外の要素の積を返すこと', () => {
    const nums = [1, 2, 3, 4];
    const expected = [24, 12, 8, 6];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  it('例2: 0を含む場合、自分以外の要素の積を返すこと', () => {
    const nums = [-1, 1, 0, -3, 3];
    const expected = [0, 0, 9, 0, 0];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  it('要素数が2つの配列を処理できること', () => {
    const nums = [2, 3];
    const expected = [3, 2];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  it('すべて負の数の配列を処理できること', () => {
    const nums = [-1, -2, -3];
    const expected = [6, 3, 2];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  it('複数の0を含む配列を処理できること', () => {
    const nums = [0, 0];
    const expected = [0, 0];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  it('1つの0を含む配列を処理できること', () => {
    const nums = [1, 0];
    const expected = [0, 1];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  it('正の数と負の数を含む配列を処理できること', () => {
    const nums = [1, -1];
    const expected = [-1, 1];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  it('より長い配列を処理できること', () => {
    const nums = [5, 1, 4, 2];
    const expected = [8, 40, 10, 20];
    expect(productExceptSelf(nums)).toEqual(expected);
  });
});
