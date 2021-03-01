module.exports = (componentName) => ({
  content: `
  import React from 'react';
  import { render } from '@testing-library/react';
  import ${componentName} from './${componentName}';

  describe('<${componentName}/> spec', () => {
    test('should match <${componentName}/> snapshot', () => {
      const container = render(${componentName});
      expect(container.firstChild).toMatchSnapshot();
    });
    test('should render <${componentName}/>', () => {
      render(<${componentName}/>);
    });

  });

  `,
  extension: `.test.js`,
});
