import React from 'react';
import Icon from '../src/icon';
import Trash from './trash';

function IconDocs() {
  return (
    <div className="section">
      <h1 className="h1">Icon Component</h1>
      <Icon>
        <Trash />
      </Icon>
    </div>
  );
}

export default IconDocs;
