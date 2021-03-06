import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import camelCase from 'lodash/camelCase';

const pkg = require('./package.json')

export default {
  input: `src/index.ts`,
  output: [
    { file: pkg.main, name: camelCase(pkg.name), format: 'umd' },
    { file: pkg.module, format: 'es' },
  ],
  sourcemap: true,
  external: [],
  watch: {
    include: 'src/**',
  },
  plugins: [
    typescript(),
    commonjs(),
    resolve(),
    sourceMaps(),
  ],
}