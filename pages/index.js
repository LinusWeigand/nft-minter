import { useState, useEffect } from "react";
import PrimaryButton from "../components/primary-button";

export default function Home() {

  const [ethereum, setEthereum] = useState(undefined);
  const [connectedAccount, setConnectedAccount] = useState(undefined);

  const handleAccounts = (accounts) => {
    if (accounts.length > 0) {
      const accoutn = accounts[0];
      console.log("We have an authorized account: ", account);
      setConnectedAccount(accounts);
    } else {
      console.log("No authorized account yet");
    }
  };

  const getConnectedAccount = async () => {
    if (window.ethereum) {
      setEthereum(window.ethereum);
    }

    if (ethereum) {
      const accounts = await ethereum.request({method: 'eth_accounts '});
      handleAccounts(accounts);
    }
  };

  useEffect(() => getConnectedAccount(), []);

  const connectAccount = () => {

  };

  if(!ethereum) {
    return <p>Please install Metamask to connect to the site</p>
  }

  if(!connectedAccount) {
    return <PrimaryButton onClick={connectAccount}>Connect Metamask Wallet</PrimaryButton>
  }

  return <p>The start of our app!</p>
}