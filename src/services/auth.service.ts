const logout = () => {
  localStorage.clear();
  return true;
};

/**
 * description: After login success, proceed to get hubs data, devices data and save it to Local Storage
 * @param {any} data - description: account data
 * @return {Promise} description
 */
const initAccountData = async (data: any): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(true);
    } catch (error) {
      localStorage.clear();
      reject(error);
    }
  })
};

const authService = {
  logout,
  initAccountData
};

export default authService;