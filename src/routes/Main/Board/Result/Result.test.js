import React from 'react';
import { render,screen } from '@testing-library/react';
import Result from './Result';

describe('Result', () => {
    const elapsed_time = 6000;
    const correct_num = 10;
    const question_num = 10;
    const type_num = 20;
    const ChangeState = jest.fn();

    beforeEach(() => {
        render(<Result ChangeState={ChangeState} elapsed_time={elapsed_time} correct_num={correct_num} question_num={question_num} type_num={type_num}/>) 
      });

    test('結果画面の表示', () => {
        screen.getByText(/結果/);
        
    })
    test('経過時間を表示',() =>{
        screen.getByText(/・経過時間:/);
        screen.getByText(/00:06:00/);
    })
    test('正しく打ったキーの数の表示',() =>{
        screen.getByText(/・正しく打ったキーの数:/);
        screen.findByText(/10/);
        
    })
    test('平均タイプ数を表示',() => {
        screen.getByText(/・平均キータイプ数:/);
        screen.getByText(/1.7/);
        screen.getByText(/回\/秒/);
    })
    test('ミスタイプ数を表示',() =>{
        screen.getByText(/・ミスタイプ数:/);
        screen.findByText(/10/);
    })
    test('正解率を表示',() => {
        screen.getByText(/・正解率:/);
        screen.getByText(/50.00/);
        screen.getByText(/%/);
    })
})
