import logo from './logo.svg';
import ContractIteraction from "./Components/ContractIteraction";
import './App.css';

//ПЕРЕД НАЧАЛОМ РАБОТЫ УБЕДИТЕСЬ В ТОМ, ЧТОБЫ ВАШ КОНТРАКТ БЫЛ ДОБАВЛЕН В СЕТЬ
//1. ПОДКЛЮЧИТЕ ВСЕ ЗАВИСИМОСТИ В ПРОЕКТЕ КОМАНДОЙ "yarn" в терминале, в папке проекта
//2. ДОБАВЬТЕ СКОМПИЛИРОВАННЫЕ ФАЙЛЫ JSON КОНТРАКТОВ В ПАПКУ "abis" (убедитесь что там присутствует нужный ключ abi с его значением)
//3. ПЕРЕЙДИТЕ В КОМПОНЕНТ ContractIteraction, для того чтобы подключить все нужные зависимости (JSON файл и адреса смартконтрактов)
//4. ЗАПУСТИТЕ ПРИЛОЖЕНИЕ ЧЕРЕЗ КОМАНДУ "yarn start", ТАКЖЕ КАК И КОМАНДУ ИЗ 1 ПУНКТА

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ContractIteraction />
      </header>
    </div>
  );
}

export default App;
