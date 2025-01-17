import { ConnectorMetadata, ConnectorType, ConnectorPlatform } from '@logto/connector-types';

export const graphAPIEndpoint = 'https://graph.microsoft.com/v1.0/me';
export const scopes = ['User.Read'];

export const defaultMetadata: ConnectorMetadata = {
  id: 'azuread-universal',
  target: 'azuread',
  type: ConnectorType.Social,
  platform: ConnectorPlatform.Universal,
  name: {
    en: 'Azure Active Directory',
    'zh-CN': 'Azure Active Directory',
  },
  logo: './logo.svg',
  logoDark: null,
  description: {
    en: 'Azure Active Directory is the biggest AD provider.',
    'zh-CN': 'Azure Active Directory is the biggest AD provider.',
  },
  readme: './README.md',
  configTemplate: './docs/config-template.json',
};

export const defaultTimeout = 5000;
