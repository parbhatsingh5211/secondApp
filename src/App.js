import './App.css';
import { Data } from './Components/Data';
import { Item } from './Components/Item';
import { Card } from './Components/Card';
function App() {
  const response = [
    {
      itemName: "Nirma",
      itemDate: "10",
      itemMonth: "June",
      itemYear: "2019"
    }, 
    {
      itemName: "Nirma2",
      itemDate: "11",
      itemMonth: "June",
      itemYear: "2020"
    },
    {
      itemName: "Nirma3",
      itemDate: "12",
      itemMonth: "June",
      itemYear: "2021"
    }
  ];
  return (
    <div>
      <Card>

        <Item name={response[0].itemName}>
          Hey, I am your Para.
        </Item>
        <Data date={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></Data>

        <Item name={response[1].itemName}></Item>
        <Data date={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></Data>
        
        <Item name={response[2].itemName}></Item>
        <Data date={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></Data>
        <div className="App">
            Hello! World
        </div>
      </Card>
    </div>
  );
}

export default App;
