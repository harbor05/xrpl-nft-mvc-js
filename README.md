# XRPL-NFT with MVC-VanillaJS

XRPL의 NFT-Devnet에서 NFT 민팅 예제를 MVC 패턴과 바닐라 자바스크립트로 구현

**Features**

1. Create Account(devnet)
2. Mint Token(NFToken)
   create NFToken object on account’s NFTokenPage ledger structure
3. Burn Token
4. Get NFT Tokens

**XRPL NFToken Lifecycle**
![image](/images/nft-lifecycle.png)

**Preparation**

1. [XRP Faucets](https://xrpl.org/xrp-testnet-faucet.html)에서 NFT-Devnet Credentials 생성
2. 생성한 Credentials(Account, Secret) 사용

```bash
# Devnet Servers
wss://s.devnet.rippletest.net:51233    # WebSocket
https://s.devnet.rippletest.net:51234  # JSON-RPC
```

```bash
# NFT-Devnet Servers
wss://xls20-sandbox.rippletest.net:51233  # WebSocket
http://xls20-sandbox.rippletest.net:51234 # JSON-RPC

```

**References**

1. [xrp-testnet-faucet](https://xrpl.org/xrp-testnet-faucet.html)
