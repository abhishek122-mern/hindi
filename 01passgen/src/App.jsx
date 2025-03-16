import { useState , useCallback, useEffect, useRef} from 'react'



function App() {
  const [length, setLength] = useState(8);
  const[numberallowed, setnumberAllowed]=useState(false);
  const[charallowd, setcharallowed]=useState(false);
  const[password, setpassword]=useState("");

const passwordRef=useRef(null);



  const passwordGenerator=useCallback(()=>{
    let pass="";
  let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUWXYZ";
  if(numberallowed) str+="0123456789";
  if(charallowd) str+="@#$%^&*()";

   for(let i=1; i<=length; i++){
    let char=Math.floor(Math.random()*str.length+1);

    pass+=str.charAt(char)
   }
   setpassword(pass);

  },[length, numberallowed,charallowd, setpassword]);

   const copypasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    
    window.navigator.clipboard.writeText(password)
   },[password])


    useEffect(()=>{
      passwordGenerator();
    } ,[length, numberallowed, charallowd, passwordGenerator
    ])
  return (
    <>
   <div className='w-full max-w-md mx-auto shadow-md rounded lg px-4 my-8 text-orange-500 bg-gray-700\'>
    <h1 className='text-black text-center my-3'>PasswordGenerator</h1>
    <div className='className="flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder='password' readOnly
      ref={passwordRef}
      />
      <button 
      onClick={copypasswordToClipboard}
      className=' outline-none bg-blue-500 text-black px-4 py-1 '>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='fles items-center gap-x-1'>
          <input type="range"
           min={6} 
          max={100}
          value={length}
          className='cursor-ponter'
          onChange={(e)=>{setLength(e.target.value)}
            
          }
          />
          <lebel>Length</lebel>
        </div>
        <div className='fles items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberallowed}
          id="numberInput"
          onChange={()=>{
            setnumberAllowed((prev)=>!prev)
          }}/>
          <lebel>Numbers</lebel>


      

      
        </div>
        <div className='fles items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charallowd}
          id="charaecterInput"
          onChange={()=>{
            setcharAllowed((prev)=>!prev)
          }}/>
          <lebel>Character</lebel>


      

      
        </div>
      </div>
   </div>
    </>
  )
}

export default App
