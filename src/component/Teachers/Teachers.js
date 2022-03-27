import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';
import './Teachers.css'

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(()=>{
        fetch('generated.json')
        .then(res=>res.json())
        .then(data=>setTeachers(data))
    },[])
    return (
        <div className='container'>
            <div className='items'>
            {
                teachers.map(teacher=><Teacher key={teacher.id} teacher={teacher}></Teacher>)
            }
        </div>
            <h1>Details</h1>
        </div>
    );
};

export default Teachers;