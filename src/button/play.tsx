import * as React from 'react';

export interface IPlayButtonProps {
	soundUrl: string;
	triggerKey: string;
	text: string;
}

export interface IPlayButtonState {
	playing: boolean;
}

const style: React.CSSProperties = {
	height: '5.6rem',
	width: '5.6rem',
	backgroundColor: 'pink',
	borderRadius: '25px',
	cursor: 'pointer',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	fontWeight: 'bold',
	fontSize: '2rem',
}

export class PlayButton extends React.Component<IPlayButtonProps, IPlayButtonState> {
	audioElement = React.createRef<HTMLMediaElement>();
	audio!: HTMLMediaElement;

	constructor(props: IPlayButtonProps) {
		super(props);

		this.state = {
			playing: false,
		};
	}

	componentDidMount() {
		this.audio = this.audioElement.current!;
		this.audio.onended = () => this.setState(() => ({ playing: false }));
	}

	play = () => {
		this.audio.currentTime = 0;
		this.audio.play();
		this.setState(() => ({ playing: true }));
	}

	public render() {
		return <div
			style={style}
			onClick={this.play}
		>
			<span>{ this.state.playing ? '🖭' :'▶' }</span>
			<audio ref={this.audioElement} src={this.props.soundUrl}></audio>
		</div>;

	}
}
