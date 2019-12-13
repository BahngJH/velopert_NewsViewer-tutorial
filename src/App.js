import React, { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';

const App = () => {
  //const [data, setData] = useState(null);
  // const onClick = () => {
  //   axios.get('https://jsonplaceholder.typicode.com/todos/1').then(Response => {
  //     setData(Response.data);
  //   });
  // };
  // const onClick = async () => {
  //   try {
  //     const Response = await axios.get(
  //       'https://newsapi.org/v2/top-headlines?country=kr&apiKey=ef0edae4cf0b4ae999520df2bb177e3b',
  //     );
  //     setData(Response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <div>
      <NewsList />
      {/* <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )} */}
    </div>
  );
};

export default App;
