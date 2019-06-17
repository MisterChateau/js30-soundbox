import './App.css';

import React from 'react';

import { PlayButton, IPlayButtonProps } from './button/play';

import PhilMp3 from './audio/philippe.mp3';
import PayeMp3 from './audio/payer.mp3';

const sounds: IPlayButtonProps[] = [{
	soundUrl: PhilMp3,
	text: 'Philippe',
	triggerKey: 'a',
},{
	soundUrl: PayeMp3,
	text: 'Tu vas payer',
	triggerKey: 'z',
}];

const App: React.FC = () => {
	return (
		<div className="App">
			{
				sounds.map(({ soundUrl, text, triggerKey }, index) => <PlayButton soundUrl={soundUrl} text={text} triggerKey={triggerKey} key={index}></PlayButton>)
			}
		</div>
	);
};

export default App;
