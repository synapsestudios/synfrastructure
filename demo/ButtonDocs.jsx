import React from 'react';
import Button from '../src/button';
import PropsTable from './PropsTable';

require('./demo.scss');

function ButtonDocs() {
  return (
    <div className="section">
      <h1 className="h1">Button Component</h1>
      <Button>
        This is a button
      </Button>
      <PropsTable
        propsData={[
          {
            name: 'children',
            type: 'any',
            default: '',
            description: '',
          },
          {
            name: 'className',
            type: 'string',
            default: '',
            description: '',
          },
          {
            name: 'componentCSSClassName',
            type: 'string',
            default: 'button',
            description: '',
          },
          {
            name: 'disabled',
            type: 'bool',
            default: '',
            description: '',
          },
          {
            name: 'element',
            type: 'enum: \'a\' \'button\' \'input\' \'span\' \'div\'',
            default: '',
            description: '',
          },
          {
            name: 'tabIndex',
            type: 'string',
            default: '',
            description: '',
          },
          {
            name: 'onClick',
            type: 'func',
            default: '',
            description: '',
          },
        ]}
      />
    </div>
  );
}

export default ButtonDocs;
