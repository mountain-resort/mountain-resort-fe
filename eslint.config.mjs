import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = ['next', 'next/core-web-vitals', 'prettier'];

const eslintRules = [
  ...compat.extends(...eslintConfig),
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSortPlugin,
    },
    settings: {
      react: { version: 'detect' }, // React 버전 자동 감지
    },
    rules: {
      // ✅ React 관련 규칙
      'react/react-in-jsx-scope': 'off', // React 17+에서는 JSX에서 React import 필요 없음
      'react/jsx-uses-react': 'off', // React 17+에서는 자동 처리됨
      'react/jsx-uses-vars': 'warn', // JSX에서 사용한 변수가 정의되지 않으면 경고
      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }], // JSX 파일 확장자는 .tsx로 제한
      'react-hooks/rules-of-hooks': 'error', // React Hook 사용 규칙 강제

      // ✅ TypeScript 관련 규칙
      '@typescript-eslint/explicit-module-boundary-types': 'off', // 함수 반환 타입 강제하지 않음
      '@typescript-eslint/no-explicit-any': 'off', // any 사용 허용
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ], // 사용되지 않는 변수 error 처리, _로 시작하는 인자는 무시

      // ✅ Import 관련 규칙
      'import/order': 'off',
      'import/newline-after-import': ['error', { count: 1 }], // import 후 한 줄 띄우기 강제
      'import/no-unresolved': 'off', // TypeScript 경로 문제 해결을 위한 OFF
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^@?\\w'], // 패키지 관련 import 우선
            ['^(@|components)(/.*|$)'], // 내부 패키지
            ['^\\u0000'], // side effect imports
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'], // 부모 경로 import
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // 상대 경로 import
            ['^.+\\.?(css)$'], // 스타일 관련 import
          ],
        },
      ],

      // ✅ 코드 스타일 관련 규칙
      quotes: ['error', 'single', { avoidEscape: true }], // 작은따옴표 사용 권장
      'no-duplicate-imports': 'error', // 중복 Import 금지
      'no-console': ['warn'], // console.log 사용 금지, console.warn/error/info만 허용
      'no-debugger': 'warn', // debugger 사용 시 경고
      'no-multiple-empty-lines': 'error', // 여러 개의 빈 줄 금지
      'no-undef': 'error', // 정의되지 않은 변수 사용 금지
      'no-trailing-spaces': 'error', // 불필요한 공백 제거
      'no-multi-spaces': 'error', // 여러 개의 공백 금지
      indent: 'off', // Prettier와 충돌 방지를 위해 OFF

      // ✅ 화살표 함수 규칙
      'arrow-parens': ['error', 'always'], // 화살표 함수 괄호 필수

      // ✅ Prettier 적용
      'prettier/prettier': 'error',
    },
    ignores: [
      'node_modules',
      'src/**/*.stories.tsx',
      'src/stories/**/*',
      'src/fonts',
      'src/stories/Page.tsx',
      'src/stories',
    ],
  },
];

export default eslintRules;
