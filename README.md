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

- So if you want create multiple providers you need to put multiple proxy there.

**Free proxy for 7 days Trial**

- Go here [7Days proxy free trial](https://dashboard.proxyscrape.com/v2/services/premium/ip-authentication/d0a61512-5605-46df-8653-7e7a3d26c830)
- Create account
- Authenticate 1 IP you use for the Proxy
- For Cloud `curl http://ipinfo.io/`
- For Windows `http://ipinfo.io/`
- Copy your IP add then authenticate

- **Oasis Official Dashboard**: [Create Account](https://r.oasis.ai/677c45028aa81aa3)

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
   
8. Open Screen Session
   ```
   screen -S oasis
   ```

9. Run The Script:

   ```bash
   npm run start
   ```
- Detach screen `ctrl + A` , `D`

  
![Banner](https://github.com/SKaaalper/oasis-ai-bot/raw/main/1.png)

## LICENSE

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
