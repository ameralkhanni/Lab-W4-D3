import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function Effect() {

    const [data,setData]=React.useState([])
    const navigate = useNavigate()

React.useEffect(()=>{
    axios.get('https://63e22a9bad0093bf29c944f1.mockapi.io/api/mydb').then(res=>{
console.log(res.data);

        setData(res.data)
       
        
    })
})

  return (
    <div className='edd'>
        <h2>البيانات المدخلة</h2>
        <button onClick={()=>navigate('/')}> رجوع</button>
        <ul>
            {data.map((item:any)=>(
                 <li key={item.id}>
                 <p>مرحبا:{item.firestName} {item.lastName}</p>
                 <p>البريد المسجل:{item.email}</p>
                 <p>الرقم المسجل :{item.nump}</p>

     
     
                 </li>
            )
            )}
        </ul>
        
    </div>
  )
}

export default Effect