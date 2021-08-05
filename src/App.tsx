import React, {useState} from 'react'
import {Button} from './components/Button1/Button1'
import {Switch} from './components/ToggleSwitch/ToggleSwitch'
import './App.css';

const App = () => {
    const [toggled, setToggled] = useState(false);
    return (
        <div className="switch">
            <Button accent="success" variant="light" label="Button" />
            <Switch onChange={(event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => setToggled(event.target.checked)} />

        </div>
    )
}

export default App
