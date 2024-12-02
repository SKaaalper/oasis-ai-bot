import { readToken, delay } from "./src/api/file.js";
import { createConnection } from "./src/network/websocket.js";
import { showBanner } from "./scr/utils/helper.js";

async function start() {
    showBanner()
    const tokens = await readToken("providers.txt");
    const proxies = await readToken("proxy_list.js");

    if (proxies.length < tokens.length) {
        logger("Not enough proxies for the number of Providers. Exiting...");
        return;
    }

    // Create connections with 1 proxy per token
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        const proxy = proxies[i]; 

        await createConnection(token, proxy);
        await delay(5000);
    }
}

start();
