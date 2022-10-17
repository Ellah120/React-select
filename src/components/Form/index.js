import { useState } from "react";
// For input
// function Form(){
//  const [firstName, setFirstName] = useState('')
//  const [lastName, setLastName] = useState('')
//  const [password, setPassword] = useState('')

//  function firstHandler(event){
//   setFirstName(event.target.value)
//  }
//  function lastHandler(event){
//   setLastName(event.target.value)
//  }
//  function passwordHandler(event){
//   setPassword(event.target.value)
//  }
//   function submitHandler(event){
//   event.preventDefault()
//   console.log(`Your first Name is ${firstName}, last name is ${lastName} and your password is ${password}`);
//   }
// return(
//   <>
//   <form onSubmit={submitHandler}>
//     <input type="text" placeholder="First name" value={firstName} onChange={firstHandler}/>
//     <br />
//     <input type="text" placeholder="Last name" value={lastName} onChange={lastHandler}/>
//     <br />
//     <input type="password" placeholder="Password" value={password} onChange={passwordHandler} />
//     <br />
//     <button type="submit">Submit</button>
//   </form>
//   </>
// )
// }


// For textarea
// function Form(){
//   const [text, setText] = useState('')
//   function addHandler(event){
// setText(event.target.value)
//   }

//   function submitHandler(event){
//     event.preventDefault()
//     console.log(text);
//   }
//   return(
//     <>
//     <form onSubmit={submitHandler}>
//       <label>
//       Describe Yourself:
//       <br />
//       <textarea value={text} cols="30" rows="10" placeholder="not more than 300 words" onChange={addHandler}></textarea>
//       </label>
//       <br />
//       <button>Submit</button>
//     </form>
//     </>
//   )
// }



function Form(){
  const [text, setText] = useState('coconut')

  function selectHandler(event){
  setText(event.target.value)
  }

  function submitHandler(event){
    event.preventDefault()
    console.log(`Your favorite fruit is ${text}`);
  }
  return(
    <>
    <form onSubmit={submitHandler}>
     <select value={text} onChange={selectHandler}>
      <option value="grapefruit">Grape Fruit</option>
      <option value="coconut">Coconut</option>
      <option value="lime">Lime</option>
      <option value="banana">Banana</option>
     </select>
     <button>Submit</button>
    </form>
    </>
  )
}
export default Form;