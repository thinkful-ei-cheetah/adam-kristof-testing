import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import STORE from '../Store'
import renderer from 'react-test-renderer';

describe('App_testing', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')

        ReactDOM.render(<App store={{lists:[], allCards:{}}}/>,div);

        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders with no crashing', () =>{
        const tree = renderer.create(<App store={{lists:[], allCards:{}}} />).toJSON();

        expect(tree).toMatchSnapshot();
    })

})