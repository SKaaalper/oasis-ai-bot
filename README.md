## OASIS AI BETA CLI VERSION

![banner](assets/image-1.png)
AI inference powered by distributed compute.

# Features

![Banner](assets/image.png)

- **Register/Login Accounts**
- **Auto Create Providers**
- **Auto Send Heartbeat**
- **Support Multy Accounts**
- **Support Proxy**

## Prerequisite

- **Git**
- **Node.js**
- **NPM**

- Put your proxy in file `proxy_list.js` format `http://username:pass@ip:port` 1 proxy for 1 provider

- Sample format for no username and password: `http://104.201.50.165:3128`

so if you want create multiple providers you need to put multiple proxy there.

**Free proxy for 7 days go here: https://dashboard.proxyscrape.com/v2/services/premium/ip-authentication/d0a61512-5605-46df-8653-7e7a3d26c830**
  
  - Create Account
  
  - Need 1 IP to authenticate just paste i to your server `curl http://ipinfo.io/`
  
  - Copy the IP address and authenticate and wait for 10Minutes
 
    **Take note only 7 Days Free**

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/SKaaalper/oasis-ai-bot.git && cd oasis-ai-bot
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Make new accounts folder:
   ```bash
   mkdir -p accounts
   ```

4. Configure all folder:
   ```bash
   cp accounts/accounts_tmp.js accounts.js && cp config/proxy_list_tmp.js proxy_list.js
   ```

5. Put your email and pass to `accounts.js` format `email|password` 1 account for 1 line

   Sample format: `edriandevsah@gmail.com|batangquiapo`

   ```bash
   nano accounts.js
   ```
   * Ctrl + O to `save`
   * Ctrl + X to `Exit`

6. Put your proxy to `proxy_list.js` 

   ```bash
   nano proxy_list.js
   ```

7. Setup to create accounts/login and get Tokens:

   ```bash
   npm run setup
   ```
8. Save your `tokens.txt`
   ```
   nano tokens.txt
   ```

9. Run The Script:

   ```bash
   npm run start
   ```
![Banner](https://github.com/SKaaalper/oasis-ai-bot/raw/main/1.png)

## LICENSE

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
