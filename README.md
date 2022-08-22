# XRPL-NFT with MVC-VanillaJS

XRPL의 NFT-Devnet에서 NFT 민팅 예제를 MVC 패턴으로 바닐라 자바스크립트를 활용하여 구현

**XRPL NFToken Lifecycle**

![image](/images/nft-lifecycle.png)

**Preparation**

1. [XRP Faucets](https://xrpl.org/xrp-testnet-faucet.html) 에서 NFT-Devnet Credentials 생성
2. 생성한 Credentials(Account, Secret) 사용

```bash
// WebSocket
wss://xls20-sandbox.rippletest.net:51233

// JSON-RPC
http://xls20-sandbox.rippletest.net:51234
```

References

1. [xrp-testnet-faucet](https://xrpl.org/xrp-testnet-faucet.html)
