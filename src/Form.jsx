import { useState } from 'react';

const Form = ({addPlayer, players}) => {


    const [value, setValue] = useState('');

    const add = () => {
        if (value == '') {
            alert('Please Enter the value');
            return;
        }

        addPlayer(value);

        setValue('');
    };
    console.log("Child List",players)
    return (
        <div className='add-player-form'>
                <input 
                type='text'
                onChange={(e) => {
                    setValue(e.target.value);
                }} 
                value={value}
                
                />
                <button onClick={add}>Click</button>
        </div>
    );
};

export default Form;