import { HtmlLogo } from '../logos/HtmlLogo';
import { CssLogo } from '../logos/CssLogo';
import { JavaScriptLogo } from '../logos/JavaScriptLogo';
import { TypeScriptLogo } from '../logos/TypeScriptLogo';
import { VueLogo } from '../logos/VueLogo';
import { ReactLogo } from '../logos/ReactLogo';
import { ViewAllLogo } from '../logos/ViewAllLogo';
import { BootstrapLogo } from '../logos/BootstrapLogo';
import { GitHubLogo } from '../logos/GitHubLogo';
import { FlutterLogo } from '../logos/FlutterLogo';
import { DartLogo } from '../logos/DartLogo';
import { PostgreSQLLogo } from '../logos/PostgreSQLLogo';
import { CodingLogo } from '../logos/CodingLogo';
import { PythonLogo } from '../logos/PythonLogo';
import { SassLogo } from '../logos/SassLogo';

export const techsData = {
  all: {
    logo: <ViewAllLogo />,
    name: 'Todas',
  },
  html: {
    logo: <HtmlLogo />,
    name: 'HTML',
  },
  css: {
    logo: <CssLogo />,
    name: 'CSS',
  },
  js: {
    logo: <JavaScriptLogo />,
    name: 'JavaScript',
  },
  ts: {
    logo: <TypeScriptLogo />,
    name: 'TypeScript',
  },
  react: {
    logo: <ReactLogo />,
    name: 'React',
  },
  vue: {
    logo: <VueLogo />,
    name: 'Vue.js',
  },
  bootstrap: {
    logo: <BootstrapLogo />,
    name: 'Bootstrap',
  },
  sass: {
    logo: <SassLogo />,
    name: 'Sass',
  },
  github: {
    logo: <GitHubLogo />,
    name: 'GitHub',
  },
  flutter: {
    logo: <FlutterLogo />,
    name: 'Flutter',
  },
  dart: {
    logo: <DartLogo />,
    name: 'Dart',
  },
  postgre: {
    logo: <PostgreSQLLogo />,
    name: 'PostgreSQL',
  },
  python: {
    logo: <PythonLogo />,
    name: 'Python',
  },
  other: {
    logo: <CodingLogo />,
    name: 'Varia',
  },
};

export const Techs = {
  html: 'html',
  css: 'css',
  js: 'js',
  ts: 'ts',
  react: 'react',
  vue: 'vue',
  all: 'all',
  bootstrap: 'bootstrap',
  sass: 'sass',
  github: 'github',
  flutter: 'flutter',
  dart: 'dart',
  postgre: 'postgre',
  python: 'python',
  other: 'other',
};
