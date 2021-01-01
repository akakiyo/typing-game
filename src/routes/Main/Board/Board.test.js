import React from 'react';
import { render,screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Board from './Board';

describe('Board', () => {

    beforeEach(() => {
        render(<Board/>); 
        
      });
      test('入力時の処理',()=>{ 
        userEvent.click(screen.getByRole('button'));
        
        screen.getByText(/10/);
      });

})
