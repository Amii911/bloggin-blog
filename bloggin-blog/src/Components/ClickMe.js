import React, {useState} from 'react'

function ClickMe() {
    const [change, setChange] = useState("")
    const [changeZero, setZero] = useState(0)

    function handleChange(e) {
        setChange(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setZero(change.length + changeZero)
        setChange("")
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text'
            value={change}
            onChange={handleChange}/>
            <button>Click Me</button>
        </form>
        {changeZero}
    </div>
  )
}

export default ClickMe;

//create an input
// create btn
//no need for data