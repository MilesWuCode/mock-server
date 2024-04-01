import typescript from '@rollup/plugin-typescript';

export default {
  input: 'index.ts',
  output: {
    file: 'index.cjs',
    format: 'cjs',
  },
  plugins: [
    typescript(),
  ],
};
