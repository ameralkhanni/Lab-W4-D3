import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Post() {
    const [firestName , setFirestName] = React.useState("")
    const [lastName , setLastName] = React.useState("")
    const [email , setEmail] = React.useState("")
    const [nump , setNump] = React.useState<any>()


const api = "https://63e22a9bad0093bf29c944f1.mockapi.io/api/mydb"

const navigate = useNavigate()
const PostData = ()=>{
    if(firestName.length >=3 &&lastName.length>=3 && email.length >=3 && nump>=3 ){
        axios.post(api,{
            firestName,
            lastName,
            email,
            nump
        }).then(res=>{
            console.log(res);
            
        })
        navigate("/create")
        axios.get("https://63e22a9bad0093bf29c944f1.mockapi.io/api/mydb")
    }else{
        alert("Please write correct information")
    }

}
  return (
    <div className='edd'>
        <p>معلومات التواصل</p>
        <input placeholder='الاسم' onChange={e =>{setFirestName(e.target.value)}}></input>
        <input placeholder=' اسم العائلة' onChange={e =>{setLastName(e.target.value)}}></input>
        <input placeholder=' البريد الاكتروني' onChange={e =>{setEmail(e.target.value)}}></input>
        <input placeholder=' رقم التواصل' onChange={e =>{setNump(e.target.value)}}></input>

        <button onClick={PostData}>تسجيل البيانات</button>
    </div>
  )
}

export default Post