import React from 'react';
import ReactDOM from 'react-dom';
import renderer from  'react-test-renderer';
import Card from './Card';

describe('Card Tests', ()=>{
  it('Renderes to the page', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Card/>, div);
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders title and content correctly', ()=>{
    const tree = renderer
    .create(<Card title={'The Title'} content={'THis is content'} />)
    .toJSON()
    expect(tree).toMatchSnapshot();
  })
})