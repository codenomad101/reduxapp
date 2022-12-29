import React from 'react';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import TextField from '../../Components/TextField';
import Button from '../../Components/Button';

const EditUser = ({params}) => {
    let {id}=useParams();
    const navigate=useNavigate();
    const [values, setValues]=useState({
        name:'',
        email:''
    })
    const handleEditUser=()=>{
        setValues({name:"",email:""})
        console.log(values);
        navigate('/');
    }
  return (
    <div className='mt-10 max-w-xl mx-auto gap-3'>

      <TextField 
      label='Name '
      value={values.name}
      onChange={(e)=>setValues({...values, name:e.target.value})}
      inputProps={{type:'text',placeholder:"John Doe"}}
      />
      <br />
       <TextField 
      label='Email '
      value={values.email}
      onChange={(e)=>setValues({...values, email :e.target.value})}
      inputProps={{type:'email',placeholder:"Johndoe@mail.com"}}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  )
}

export default EditUser;

