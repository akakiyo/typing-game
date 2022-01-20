import React from 'react';
import { render,screen } from '@testing-library/react';
import Top from './Top';

describe('Top', () => {
    const ChangeState = jest.fn();

    beforeEach(() => {
        render(<Top ChangeState={ChangeState}/>) 
      });
      test('画面の表示',()=>{
        screen.getByText(/NS-TYPING/);
        screen.getByText(/数字・記号専用のタイピング練習ゲーム/);
      });
})

