import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/sw/index.ts',
  output: {
    file: './dist/sw.js',
    format: 'iife',
  },
  plugins: [
    typescript({
      'compilerOptions': {
        'allowJs': true,
        'esModuleInterop': true,
        'lib': ['ES6', 'WebWorker'],
        'module': 'es6',
        'target': 'es6',
      },
      'include': ['./src/sw/**/*']
    }),
  ]
};
