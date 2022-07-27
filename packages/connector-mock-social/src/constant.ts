import { ConnectorMetadata, ConnectorType, ConnectorPlatform } from '@logto/connector-types';

export const defaultMetadata: ConnectorMetadata = {
  id: 'mock-social-connector',
  target: 'mock-social',
  type: ConnectorType.Social,
  platform: ConnectorPlatform.Universal,
  name: {
    en: 'Mock Social',
    'zh-CN': 'Mock 社交登录',
  },
  logo: './logo.svg',
  logoDark: null,
  description: {
    en: 'Social mock connector description',
    'zh-CN': 'Mock 社交登录连接器的描述',
  },
  readme: './README.md',
  configTemplate: './docs/config-template.json',
};

export const defaultTimeout = 5000;
