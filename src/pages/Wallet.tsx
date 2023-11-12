import { Button, Input, Space, message } from "antd";
import { useState } from "react";
import Web3, { TransactionReceipt } from "web3";

export default function Wallet() {
  const [endPoint, setEndPoint] = useState("");
  const [address, setAddress] = useState("");
  const [hash, setHash] = useState("");

  const [balance, setBalance] = useState("");
  const [transactionResult, setTransactionResult] =
    useState<TransactionReceipt>();
  const [transaction, setTransaction] = useState("");

  const getBalance = async () => {
    if (!address || !endPoint) {
      message.error("endpoint와 address를 입력해주세요");
      return;
    }

    const web3 = new Web3(endPoint);
    try {
      const wei = await web3.eth.getBalance(address);
      setBalance(web3.utils.fromWei(wei, "ether") + " ETH");
    } catch (err) {
      message.error("잘못된 정보입니다");
    }
  };

  // 생성 실패...
  const sendTransaction = async () => {
    if (!endPoint) {
      message.error("endpoint를 입력해주세요");
      return;
    }
    const web3 = new Web3(new Web3.providers.HttpProvider(endPoint));
    try {
      const transaction = {
        to: "0x027099997C0F41A7bbDFE24939E2dD3Ae66d2e6E",
        from: "0xe5851DF46B199A31a9110564e01b9c65b79b553e",
        value: web3.utils.toWei("0", "ether").toString(),
      };

      const gasPrice = await web3.eth.getGasPrice();
      const gasLimit = await web3.eth.estimateGas(transaction);

      const result = await web3.eth.sendTransaction({
        ...transaction,
        gasLimit: gasLimit.toString(),
        gasPrice: gasPrice.toString(),
      });

      setTransactionResult(result);
    } catch (err) {
      console.log(err);
    }
  };

  const getTransaction = async () => {
    const web3 = new Web3(endPoint);

    const obj = await web3.eth.getTransaction(hash);
    setTransaction(JSON.stringify(obj));
  };

  return (
    <div style={{ margin: 20 }}>
      <h1>ETH Balance Fetcher</h1>
      <Space direction='vertical'>
        <div>
          <p>Ethereum Infura 네트워크 엔드포인트: </p>
          <Input
            style={{ width: 600 }}
            value={endPoint}
            onChange={(e) => setEndPoint(e.target.value)}
            placeholder='Infura 네트워크 엔드포인트'
          />
        </div>
        <div>
          <p>Ethereum 주소:</p>
          <Space>
            <Input
              style={{ width: 400 }}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder='Ethereum 주소 (hex)'
            />
            <Button onClick={getBalance}>Get Balance</Button>
          </Space>
          <p>{balance}</p>
        </div>
        <div>
          <p>Ethereum Transaction 보내기: </p>
          <Button onClick={sendTransaction}>보내기</Button>
          <p>{JSON.stringify(transactionResult)}</p>
        </div>
        <div>
          <p>Ethereum Transaction 조회:</p>
          <Space>
            <Input
              style={{ width: 400 }}
              value={hash}
              onChange={(e) => setHash(e.target.value)}
              placeholder='Transction Id'
            />
            <Button onClick={getTransaction}>Get Transaction</Button>
          </Space>
          <p>{transaction}</p>
        </div>
      </Space>
    </div>
  );
}
