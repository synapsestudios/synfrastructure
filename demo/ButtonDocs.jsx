import React from 'react';
import Button from '../src/button';

function ButtonDocs() {
  return (
    <div className="section">
      <h1 className="h1">Button Component</h1>
      <h2 className="h2">Sizes</h2>
      <div>
        <Button size="xsmall">
          This is a xsmall button
        </Button>
      </div>
      <div>
        <Button size="small">
          This is a small button
        </Button>
      </div>
      <div>
        <Button size="medium">
          This is a medium button
        </Button>
      </div>
      <div>
        <Button size="large">
          This is a large button
        </Button>
      </div>
      <div>
        <Button size="xlarge">
          This is a xlarge button
        </Button>
      </div>
      <h2 className="h2">Color Themes</h2>
      <div>
        <Button
          size="medium"
          theme="primary"
        >
          This is a primary button
        </Button>
        <Button
          size="medium"
          theme="secondary"
        >
          This is a secondary button
        </Button>
        <Button
          size="medium"
          theme="tertiary"
        >
          This is an tertiary button
        </Button>
      </div>
      <div>
        <Button
          size="small"
          theme="status--success"
        >
          This is a status--success button
        </Button>
        <Button
          size="small"
          theme="status--warning"
        >
          This is a status--warning button
        </Button>
        <Button
          size="small"
          theme="status--error"
        >
          This is a status--error button
        </Button>
        <Button
          size="small"
          theme="status--info"
        >
          This is a status--info button
        </Button>
      </div>
      <div>
        <Button
          display="block"
        >
          This is a block button
        </Button>
      </div>
    </div>
  );
}

export default ButtonDocs;
