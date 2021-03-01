module.exports = (componentName) => ({
  content: `
  import styled from 'styled-components'
  import { rem } from 'polished';
  import { Box } from 'reflexbox';

  const Styled${componentName} = styled(Box)`
    padding: ${rem(16)};
    `;

  export { Styled${componentName} };
  
      
      `,
  extension: `.styled.js`,
});
