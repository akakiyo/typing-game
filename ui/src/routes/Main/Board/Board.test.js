import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Board,{GET_QUESTION_QUERY} from './Board';
import getQuestion from './utils/getQuestion';
import { MockedProvider } from '@apollo/client/testing';

const question_mocks = [
  {
    request: {
      query: GET_QUESTION_QUERY,
    },
    result: {
      data: {
        question: ['a','b','c','d','e','f','g','h','i',
        'j','k','l','m','n','o','p','q','r','s',
        't','u','v','w','x','y','z',
        '0','1','2','3','4','5','6','7','8','9',
        '!','"','#','$','%','&','\'','(',')','-',
        '=','^','~','\\','|','@','`','[','{',':',
        '*',']','}',',','<','.','>','/','_'],
      },
    },
  },
];


describe('Board', () => {

  beforeEach(() => {
    
    render(<MockedProvider mocks={question_mocks} addTypename={false}><Board/></MockedProvider>);
  });
  test('間違ったキーが入力された時の処理', async() => {
    await  act (async()=>{
      await new Promise(resolve => setTimeout(resolve, 0));
    })
    userEvent.click(screen.getByRole('button'));
    let wrong_key = getQuestion();
    while(wrong_key===screen.getByTestId("question").textContent){
      wrong_key = getQuestion();
    }
    act(() => {
      document.dispatchEvent(new KeyboardEvent("keydown", { key:wrong_key}));

    });
    screen.getByText('問題数:10');
    screen.getByText('正解数:0');
  });
  test('正解のキーが入力された時の処理', async() => {
    await act(async()=>{
      await new Promise(resolve => setTimeout(resolve, 0));
    })
    
    userEvent.click(screen.getByRole('button'));
    act(() => {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: screen.getByTestId("question").textContent }));

    });
    screen.getByText('問題数:9');
    screen.getByText('正解数:1');
  });

})
