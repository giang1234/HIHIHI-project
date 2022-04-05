import _ from 'lodash';
import format from 'date-fns/format';
import { LOCAL_STORAGE_KEY } from 'src/constants/common';
import { storage } from './standardizedData';

export const formatQuery = (query: any) => {
  const formatted = {};

  _.forEach(query, (v, k) => {
    formatted[k] = v;
  });
  return formatted;
};

/**
 * description: This function is used to convert string date to date type
 * @param {string} str - description
 */
export const convertStringDDMMYYYYToDate = (str: string) => {
  return format(
    new Date(str.replace(/(\d{2})-(\d{2})-(\d{4})/, '$2/$1/$3')),
    'dd/MM/yyyy',
  );
};

/**
 * description: This function is used to Change time format
 * @param {any} t - description: Time
 * @param {string} f - description: format
 * @returns {string} description: 
*/

export const convertTime = (t: any, f: string): string => {
  if (!t) return null;
  return format(new Date(t), f);
}

/**
 * description: This function is used to get the config of request
 * @param {any} t - description: Time
 * @param {string} f - description: format
 * @return {object} - description
*/

export const getRequestConfigurations = (): any => {
  return { 'Content-Type': 'application/json', 'Authorization': `Bearer ${storage(LOCAL_STORAGE_KEY.ACCESS_TOKEN_APP)}` }
}

/**
 * description: 
 * @param {number} time - description: miliseconds
 * @returns {promise} - description: 
 */
export const delay = (time: any): Promise<any> => {
  return new Promise(resolve => setTimeout(resolve, time));
}