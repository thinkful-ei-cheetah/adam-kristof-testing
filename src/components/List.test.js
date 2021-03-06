import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List_testing', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')

        ReactDOM.render(<List key={34} header={[]} cards={[]}/>,div);

        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders with no crashing', () =>{
        const tree = renderer.create(<List key={5} header={[]} cards={[]}/>).toJSON();

        expect(tree).toMatchSnapshot();
    })

})