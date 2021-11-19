import React, { useEffect, useState } from "react";

import { ethers, providers, Contract } from "ethers";

//ИМПОРТИРУЙТЕ НУЖНЫЕ JSON ФАЙЛЫ ВАШЕГО СМАРТКОНТРАКТА НИЖЕ
import Main from "../../abis/Main.json";
import "./style.css";

//ПОДКЛЮЧИТЕ НУЖНЫЕ ВАМ АДРЕСА СМАРТКОНТРАКТОВ В ОБЪЕКТЕ ContractsAddresseses
const ContractsAddresses = {
  MainContractAddress: "0xCA164106b222C0280d9C5daca54D9AAc75c806A7",
};

const ContractIteraction = () => {
  //СОСТОЯНИЯ КОМПОНЕНТА
  // user ПОКАЗЫВАЕТ АДРЕС КОШЕЛЬКА И БАЛАНС НА НЁМ
  // isUserConnect ПОКАЗЫВАЕТ ПОДКЛЮЧИЛСЯ ЛИ ПОЛЬЗОВАТЕЛЬ К СВОЕМУ КОШЕЛЬКУ
  const [user, setUser] = useState({
    address: undefined,
    balance: undefined,
  });
  const [isUserConnect, setIsUserConnect] = useState(false);

  //ПРОСТО ЗАПУСКАЕТСЯ В НАЧАЛЕ РАБОТЫ КОМПОНЕНТА И ВЫВОДИТ В Console БРАУЗЕРА ЧТО КОМПОНЕНТ РАБОТАЕТ
  useEffect(() => {
    console.log("Start contract iteraction");
  }, []);

  //ФУНКЦИЯ ПОДКЛЮЧЕНИЕ 
  async function connectToMetaMask() {
    const provider = new providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    let balance = ethers.utils.formatEther(await signer.getBalance());

    if(address) {
      setIsUserConnect(true);
      setUser({address, balance})
      //ВЫЗОВ ЛЮБОГО МЕТОДА ИЗ СМАРТКОНТРАКТА
      getSomeContractMethod(provider, address);
    }
  }

  async function getSomeContractMethod(provider, address) {
    //ПОДКЛЮЧЕНИЕ К СМАРТКОНТРАКТУ
    const contract = new Contract(ContractsAddresses.MainContractAddress, Main.abi, provider);
    
    //ВЫЗОВ НУЖНОГО МЕТОДА СМАРТКОНТРАКТА
    const result = await contract.getCarsByOwner(address);

    //ВЫВОД РЕЗУЛЬТАТА ВЫЗОВА МЕТОДА В Сonsole бразуера
    console.log("Function call result: \n", result);
  }

  return (
    <>
      {
        isUserConnect ? (
          <>
            <p className="user-info-message">
              <span>ADDRESS</span>: {user.address} 
              <br/>
              <span>BALANCE</span>: {user.balance}
            </p>
          </>
        ) : (
          <p>
            Start contract iteraction... <br/>
            Please, click on connect button
          </p>
        )
      }

      <button className="connect-button" onClick={connectToMetaMask}>
        { !isUserConnect ? "Connect" : "Connecting" }
      </button>
    </>
  )
}

export default React.memo(ContractIteraction);