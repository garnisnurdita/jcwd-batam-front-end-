import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import useCounter from './components/counter';
import NewComponent from './components/newComponents';
function App() {
          // state, setState
  const [count,setCount] = useState(5)

  // let array = [1,2,3,4]

  const [arr,setArr ] = useState([1,2,3,4])

  let varCount = 0


  // //componentwillmount
  // useEffect(() => {
  //   alert("component will mount")

  // })

//   //componentDidMount
//   useEffect(() => {
// //code-block
//   },[])

//   //componentdidUpdate
//   useEffect(()=> {

//   },[count])


   
    // componentDidMount;
    //method yang jalan setelah component ter-render
  useEffect(() => {
      alert('this is componentdidmount ')
  }, []);

  //componentDidUpdate
  useEffect(()=> {
    document.title = `you clicked ${count} times`
  },[count])


  // //componentWillUnmount
  // useEffect(() => {
  //   return () => {
  //     alert("good bye");
  //   };
  // }, []);

  // //componentDidUpdate
  useEffect(() => {
    // alert("terjadi perubahan state react hooks");
    
  }, [count]);

  const [hitung,penambahan,pengurangan] = useCounter(0,1)
  // useEffect(()=> {
  //   document.title = "you clicked this button " + count + " times"
  // }, [count])

  function increment () {
    setCount(count+1)
  }

  function decrement() {
    setCount(count-1)

  }



  return (
    <div>
      <p>
        you clicked me {count}
      </p>
      {/* {
        arr.map((val) => {
          return  <NewComponent number={val} />
        })
      } */}
      {/* <input type={"file"} style={{ display:"none" }}></input> */}

      
<button

onClick={increment}

// onClick={()=>{ 
  
// setCount(count + 1)
// // array.push(count)

// // setArr([...arr, count])

// // setArr(array)
// }}
>
Increment

</button>

<button onClick={decrement}>
  Decrement
</button>




 <div>
  <h1>{hitung}</h1>
  <button onClick={penambahan}>increment</button>
  <button onClick={pengurangan}>decrement</button>

</div> 
    </div>
  );
}

export default App;
