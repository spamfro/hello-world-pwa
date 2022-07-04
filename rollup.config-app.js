import json from '@rollup/plugin-json';
import url from '@rollup/plugin-url';
import css from 'rollup-plugin-css-only';

import typescript from '@rollup/plugin-typescript';

// import commonjs from '@rollup/plugin-commonjs';
// import resolve from '@rollup/plugin-node-resolve';
// import replace from '@rollup/plugin-replace';

// import { terser } from "rollup-plugin-terser";

export default {
  external: ['react', 'react-dom'],
  input: './src/app/index.tsx',
  output: {
    file: './dist/app.js',
    format: 'iife',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    }
  },
  plugins: [
    json(),
    url({
      limit: 0,
      fileName: '[name][extname]'
    }),
    css({
      output: 'index.css'
    }),
    typescript({
      "compilerOptions": {
        "allowJs": true,
        "esModuleInterop": true,
        "jsx": "react",
        "module": "es6",
        "target": "es6",
        "lib": ["dom", "es2015"],
      },
      // "include": ["./src/**/*"]
    }),
    // resolve({
    //   moduleDirectories: ['node_modules']
    // }),
    // commonjs(),
    // replace({
    //   preventAssignment: true,
    //   values: {
    //     'process.env.NODE_ENV': JSON.stringify('production'),
    //   }
    // }),
    // terser()
  ]
};
