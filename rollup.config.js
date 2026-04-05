import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: 'dist/index.esm.js', format: 'es' },
      { file: 'dist/index.cjs.js', format: 'cjs' }
    ],
    external: ['react', 'react-dom'],
    plugins: [resolve(), commonjs(), typescript({ useTsconfigDeclarationDir: true })]
  }
];
