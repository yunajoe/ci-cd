module.exports = {
  presets: [
    "@babel/preset-env", // 최신 JS 문법을 구 버전의 JS로 변환
    "@babel/preset-react", // React JSX 변환
  ],
  plugins: [
    "@babel/plugin-transform-modules-commonjs", // ESM -> CommonJS 변환
  ],
};
