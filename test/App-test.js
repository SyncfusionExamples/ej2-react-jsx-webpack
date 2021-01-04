import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import { detach } from "@syncfusion/ej2-base";


describe('Dropdown - Simple component render  ', () => {
  let container;
  let compInstance;

  beforeEach((done) => {
    container = document.createElement('div');
    container.setAttribute('id', 'root');
    document.body.appendChild(container);
    ReactDOM.render(<App ref={instance => compInstance = instance} />, container);
    done();
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    detach(container);
  });

  it('Test the value of the dropdown component', () => {
    expect(compInstance.dropDownObj.value).toBe('Badminton');
  });

  it('Test the value change', () => {
    compInstance.dropDownObj.value = "Cricket"
    expect(compInstance.dropDownObj.value).not.toBe('Badminton');
    expect(compInstance.dropDownObj.value).toBe('Cricket');
  });
});

