import React from 'react';
import { render } from '@testing-library/react';
import Card from '../components/card';



test('renders components', ()=>{
    const {getByTestId} = render(<Card/>);
    const card = getByTestId('card');
    expect(card).toBeDefined();
});