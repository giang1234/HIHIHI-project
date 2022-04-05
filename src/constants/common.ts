/**
 * description: This file defines the common constants used in the application 
 * CONFIG_APP, LANGS, STATE_APP
 * TYPE_LOCAL_STORAGE, RESTART_POLICY
 * DEVICE_STATUS_MESSAGE, REQUEST_MESSAGE
 * KEY_DEPLOY_STATUS, VIEW_DELOY_STATUS
 * LOCAL_STORAGE_KEY
 */

export const CONFIG_APP = {
    PUBLIC_URL: process.env.REACT_APP_API_ROOT_URL,
    API_URL: process.env.REACT_APP_API_BASE_URL,
    CURRENT_STATE_APP: process.env.REACT_APP_STATE,
};

export const LANGS = [
    {
        value: 'vi',
        name: 'common.vietnamese'
    },
    {
        value: 'en',
        name: 'common.english'
    }
];

export const STATE_APP = {
    MAINTAIN: 'maintain',
    RUNNING: 'running',
};

export const LOCAL_STORAGE_KEY = {
    APP_THEME: 'appTheme',
    ACCESS_TOKEN_APP: 'accessToken',
    ACCOUNT_INFO: 'info',
}