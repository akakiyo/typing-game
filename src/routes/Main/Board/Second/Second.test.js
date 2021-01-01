import React from 'react';
import { render,screen } from '@testing-library/react';
import Second from './Second';

describe('Second', () => {
    const correct_num = 0;
    const question_num = 10;
    const question = 'k';
    const ChangeState = jest.fn();

    beforeEach(() => {
        render(<Second ChangeState={ChangeState} question={question} correct_num={correct_num} question_num={question_num}/>) 
      });
      test('画面の表示',()=>{
        screen.getByText('表示された数字または記号のキーを押してください');
        screen.getByText(/k/);
      });
      test('問題数',()=>{
        screen.getByText(/問題数:/);
        screen.getByText(/10/);
      });
      test('正解数',()=>{
        screen.getByText(/正解数:/);
        screen.getByText('0');
        
      });
})
