
/**
 * @param {number} number
 * @param {unComma} boolean
 * @return number formatted, 100000 => 100,000 or 100,000 -> 100000
 */
export const formatNumber = (number: number, unComma: boolean = false ): string | number => {
    if(!number) return 0; // if number not exsits return;
    
    var num = (number + "");
    if(unComma) return num.replace(/[^\d.-]/g, ''); // if is remove format number return 1,000 -> 1000

    var x = num.split("."),
        y = x[0],
        z = x.length > 1 ? "." + x[1] : "",
        r = /(\d+)(\d{3})/;
    while (r.test(y))
        y = y.replace(r, `$1,$2`);
    return y + z;
};

/**
 * @param func function debounced
 * @param waitFor time debounce
 */
export const debounce = (func: any, waitFor: any) => {
    let timeout = 0;

    const debounced = (...args) => {
        clearTimeout(timeout);
        setTimeout(() => func(...args), waitFor);
    };

    return debounced;
};

/**
 * @param {number} value
 * @return number formatted, 1 => 01
 */
export const getStandardIntegerNumberFormatByValue = (value: any) => {
    if (isNaN(value) || value === 0) {
        return '0';
    }

    return parseInt(value) >= 10 ? parseInt(value).toString() : `0${parseInt(value)}`;
}

/**
 * Description: This function to get and set data to local or session storage in browers
 * @param {string} key description: 
 * @param {any} val description:
 * @param {local | session} type description:  
*/
export const storage = (key: string, val?: any, type?: 'localStorage' | 'sessionStorage'): any => {
    if (typeof key === "object") {
        Object.keys(key).map((k: string): any => storage(k, key[k], val));
    } else {
        // Get item
        if (val === undefined){
            let data = localStorage.getItem(key) || sessionStorage.getItem(key);
            if(typeof data === "string"){
                if(["{}", "[]"].includes(data[0] + data[data.length - 1]) && !!data[1].match(/^[\d\]"[{]$/)) { // Check isJSON
                    return JSON.parse(data);
                }
            }
            return data;
        }
        // Set item
        try {
            (type === "localStorage" ? localStorage : sessionStorage).setItem(key, typeof val === "string" ? val : JSON.stringify(val));
            return val;
        } catch (e) {
            if (e.toString().match("QuotaExceeded")) {
                console.log("SYSTEM", "storage_full");
            } else {
                console.log(e);
            }
        }
    }
}

/**
 * Description: This function to remove item in storage
 * @param {array} params description: 
 * @return {array - boolean} description: 
*/
export const removeStorage = (params: any[] = []): boolean[] => {
    return params.map((v: string): any => {
        sessionStorage.removeItem(v);
        localStorage.removeItem(v);
        return true;
    });
}

/**
 * Description: This function to check a string is md5
 * @param {string} string description: 
 * @return {boolean} description: 
*/
export const isMd5 = (string: string): boolean => {
    return !!string.match(/^[a-f0-9]{32}$/);
}

/**
 * Description: This function to convert hex color to rgb color
 * @param {string} hex description: 
 * @return {boolean} description: 
*/
export const hexToRgb = (hex: string): any[] => {
    // If there is a # at the beginning of the text then remove #
    if(/^#/.test(hex)) { 
        hex = hex.slice(1);
    }

    // don't is hex color
    if(hex.length !== 3 && hex.length !== 6) {
        return [0, 0, 0];
    }

    // convert to array
    let d = hex.split("");

    if(hex.length === 3) {
        d = [hex[0], hex[0], hex[1], hex[1], hex[2], hex[2]];
    }

    return ['r','g','b'].map((v: string, i: number): number => parseInt([d[i], d[i + 1]].join(""), 16));
}

/**
 * Description: This function to convert rgb color to hex color
 * @param {string} string description: 
 * @return {boolean} description: 
*/
export const rgbToHex = (rgb: string): string => {
    const r = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + ['r','g', 'b'].map((v:string, i: number): string => parseInt(r[i + 1], 10).toString(16).slice(-2)).join("");
}

