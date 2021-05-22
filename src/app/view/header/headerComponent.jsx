import React, { useState } from 'react';
import { Button, Switch } from 'antd';
import { changeName } from '../redux/actions';

function HeaderComponent(props){
    const {name, dispatch} = props;
    const [theme, setTheme ] = useState(true);

    console.log(name);
    const onChange = ()=>{
        dispatch(changeName('aaa' + new Date().getTime()));
        setTheme(!theme);
        handleColorChange();
    }
    const handleColorChange = ()=>{
        if (!window.less) {
            return;
          }
        const color = "blue";
        window.less.modifyVars({
             '@primaryColor':color
        })
        .then(() => {
             console.log('修改成功');
        });
    };

    return (
        <div>
             {/* <Button type="primary">Switch Theme</Button> */}
             <Switch defaultChecked onChange={onChange} />
        </div>
    )
}

export default HeaderComponent;