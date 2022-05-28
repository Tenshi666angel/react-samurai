SystemJS.config({
  baseURL:'https://unpkg.com/',
  defaultExtension: true,
  packages: {
    ".": {
      main: './index.jsx',
      defaultExtension: 'jsx'
    }
  },
  meta: {
    '*.jsx': {
      'babelOptions': {
        react: true
      },
    }
  },
  map: {
    'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react': 'react@17.0.1/umd/react.development.js',
    'react-dom': 'react-dom@17.0.1/umd/react-dom.development.js'
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./index')
  .catch(console.error.bind(console));
