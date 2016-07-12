import React from 'react';
import Alert from '../src/alert';
import PropsTable from './PropsTable';

require('./demo.scss');

function AlertDocs() {
  return (
    <div className="section">
      <h1 className="h1">Alert Component</h1>
      <Alert>
        This is an alert block.
      </Alert>
      <PropsTable
        propsData={[
          {
            name: 'children*',
            type: 'node',
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
            default: 'alert',
            description: '',
          },
          {
            name: 'dismissable',
            type: 'bool',
            default: '',
            description: '',
          },
          {
            name: 'dismissIcon',
            type: 'any',
            default: '',
            description: '',
          },
          {
            name: 'show',
            type: 'bool',
            default: '',
            description: '',
          },
          {
            name: 'onDismiss',
            type: 'func',
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

export default AlertDocs;
