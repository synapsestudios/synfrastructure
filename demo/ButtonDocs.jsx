import React from 'react';
import Button from '../src/button';

function ButtonDocs() {
  return (
    <div className="section">
      <h1 className="h1">Button Component</h1>
      <h4 className="h4">Sizes</h4>
      <div>
        <Button size="xsmall">
          This is a xsmall Button
        </Button>
      </div>
      <div>
        <Button size="small">
          This is a small Button
        </Button>
      </div>
      <div>
        <Button size="medium">
          This is a medium Button
        </Button>
      </div>
      <div>
        <Button size="large">
          This is a large Button
        </Button>
      </div>
      <div>
        <Button size="xlarge">
          This is a xlarge Button
        </Button>
      </div>
      <h4 className="h4">Color Themes</h4>
      <Button
        size="medium"
        colorTheme="primary"
        display="block"
      >
        This is a primary Button
      </Button>
      <Button
        size="medium"
        colorTheme="secondary"
        display="block"
      >
        This is a secondary Button
      </Button>
      <Button
        size="medium"
        colorTheme="tertiary"
        display="block"
      >
        This is an tertiary Button
      </Button>
      <Button
        size="medium"
        colorTheme="alt-primary"
        display="block"
      >
        This is an alt-primary Button
      </Button>
      <Button
        size="medium"
        colorTheme="alt-secondary"
        display="block"
      >
        This is an alt-secondary Button
      </Button>
      <Button
        size="medium"
        colorTheme="alt-tertiary"
        display="block"
      >
        This is an alt-tertiary Button
      </Button>
    </div>
  );
}

export default ButtonDocs;
