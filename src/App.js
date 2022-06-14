import './App.css';
import React, {useState, useEffect} from "react";
import './styles/styles.css';
import unicorn from './images/unicorn.png';
import { deserialize } from "deserialize-json-api";

function App() {

  const [data, setData] = useState('');

  //const [id, setId] = useState('');
  //const [title, setTitle] = useState('');
  //const [tags, setTags] = useState('');
  
    useEffect(() => {
      fetch("https://api.brella.io/api/aalto/events/unicorndemo2025/time_slots")
      .then((resp) => resp.json())
      .then((data) => {
        //console.log('data',deserialize(data));
        setData(deserialize(data).data);
      })
      .catch(error => console.log(error))
    },[])

    //console.log('data2',Object.values(data)[0]);

  //console.log('data3',data);

  const firstItem = Object.values(data)[0];
  //console.log(firstItem?.title);

  const Items = Object.values(data);

  
  let title = firstItem?.title;
  let duration = firstItem?.duration;


    let titles = Items.title;

    console.log('titles',titles);

  //märittele mitkä tiedot haluat hakea datasta ja printtaa ne sivulle seuraavaksi
  

  return (
    <div className="time-slot">
            <div className='image'>
        <img width={150} height={150} src={unicorn} alt='unicorn'></img>
      </div>
      <h1>Event schedule</h1>
          <div className='schedule'>
              <p>09:00 AM</p>
              <p>{title}</p> 
              <p>Dr. John Smith (Speaker)</p>
              <p>Main stage</p>
              <p>{duration} min</p>
              <p>Tags will appear here</p>
      </div>
      </div>
  );
}

export default App;
