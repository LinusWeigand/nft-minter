import { useState, useEffect } from "react";
import PrimaryButton from "../components/primary-button";

export default function Home() {

  const [ethereum, setEthereum] = useState(undefined);
  const [connectedAccount, setConnectedAccount] = useState(undefined);

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