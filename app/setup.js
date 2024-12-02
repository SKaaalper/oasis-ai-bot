import { readToken, delay } from "./src/api/file.js";
import { showBanner } from "./src/utils/helper.js";
import { loginFromFile } from "./src/utils/login.js";
import { createProviders } from "./src/network/providers.js";
import { logger } from "./src/utils/logger.js";

async function setup() {
    showBanner();
    const proxies = await readToken("proxy_list.js");
    const isLogin = await loginFromFile('accounts.js');
    let numProv = proxies.length;
    if (proxies.length === 0) { 
        logger('No proxies found in proxy.txt Exiting...', "", "error");
        return; 
    };
    if (!isLogin) {
        logger("No accounts were successfully logged in. Exiting...", "", "error");
        return; 
    }
    if (numProv > 100) {
        numProv = 100;
        logger("Maximum of 100 Providers allowed per account.", "", "warn");
    }

    logger(`Creating ${numProv} Providers...`);
    await createProviders(numProv);
}

setup();
