
import "./styles.css"
import Clock from './clock'
// const keyframes = {
// 	'@keyframes typeAndDelete': {
// 		'0%, 10%': {
// 			width: 0,
// 		},
// 		'45%, 55%': {
// 			width: "8em",
// 		},
// 		'90%, 100%': {
// 			width: 0,
// 		}
// 	}
// };
// 

type KeyProps = {
	text: string | undefined,
	subText: string | undefined,
	className: string | undefined
}

export default function KeyBoard() {
	//	const text = "programando"

	// const animationStyles = {
	//		animation: "typeAndDelete 8s infinite, blinkCursor .5s step-end infinite alternate",
	//		animationTimingFunction: `steps(${text.length + 2})`,
	//		animationName: 'typeAndDelete'
	//	};

	return (
		<div className="container-keyboard">
			{/*
            <div className="keyboard-pronter">
                <div style={{ ...animationStyles }} className="text">{text}</div>
            </div>
            */}
			<div className="keyboard">

				<div>
					{
						row1.map((e: KeyProps, index: number) => <Key key={index} {...e} />)
					}
				</div>

				<div>
					{
						row2.map((e: KeyProps, index: number) => <Key key={index} {...e} />)
					}
				</div>

				<div>
					{
						row3.map((e: KeyProps, index: number) => <Key key={index} {...e} />)
					}
				</div>

				<div>
					{
						row4.map((e: KeyProps, index: number) => <Key key={index} {...e} />)
					}
				</div>

				<div>
					{
						row5.map((e: KeyProps, index: number) => <Key key={index} {...e} />)
					}
				</div>

				<div className="last">
					{
						row6.map((e: KeyProps, index: number) => <Key key={index} {...e} />)
					}
				</div>

				<div className="buttons">
					<div>
						<button><div></div></button>
						<button><div></div></button>
					</div>
				</div>

				<div className="screen">
					<div>
						<div>
							<div>
								<div className="screen-data" >
									<Clock />
									<span>Thru, Apr 4</span>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

const row1: KeyProps[] = [
	{
		text: "esc",
		className: "key orange esc",
		subText: undefined,
	},
	{
		text: "F1",
		className: "key",
		subText: undefined
	},
	{
		text: "F2",
		className: "key",
		subText: undefined
	},
	{
		text: "F3",
		className: "key",
		subText: undefined
	},
	{
		text: "F4",
		className: "key",
		subText: undefined
	},
	{
		text: "F5",
		className: "key",
		subText: undefined
	},
	{
		text: "F6",
		className: "key",
		subText: undefined
	},
	{
		text: "F7",
		className: "key",
		subText: undefined
	},
	{
		text: "F8",
		className: "key",
		subText: undefined
	},
	{
		text: "F9",
		className: "key",
		subText: undefined
	},
	{
		text: "F10",
		className: "key",
		subText: undefined
	},
	{
		text: "F11",
		className: "key",
		subText: undefined
	},
	{
		text: "F12",
		className: "key",
		subText: undefined,
	},
	{
		text: "del",
		className: "key del",
		subText: undefined,
	}
]

const row2: KeyProps[] = [
	{
		text: "esc",
		className: "key",
		subText: "±",
	},
	{
		text: "1",
		className: "key",
		subText: "!",
	},
	{
		text: "2",
		className: "key",
		subText: "@",
	},
	{
		text: "3",
		className: "key",
		subText: "#",
	},
	{
		text: "4",
		className: "key",
		subText: "$",
	},
	{
		text: "5",
		className: "key",
		subText: "%",
	},
	{
		text: "6",
		className: "key",
		subText: "^",
	},
	{
		text: "7",
		className: "key",
		subText: "&",
	},
	{
		text: "8",
		className: "key",
		subText: "*",
	},
	{
		text: "9",
		className: "key",
		subText: "(",
	},
	{
		text: "0",
		className: "key",
		subText: ")",
	},
	{
		text: "-",
		className: "key",
		subText: "_",
	},
	{
		text: "=",
		className: "key",
		subText: "+",
	},
	{
		text: "backspace",
		className: "key backspace",
		subText: undefined,
	}
]

const row3: KeyProps[] = [
	{
		text: "tab",
		className: "key tab",
		subText: undefined
	},
	{
		text: "Q",
		className: "key",
		subText: undefined
	},
	{
		text: "W",
		className: "key",
		subText: undefined,
	},
	{
		text: "E",
		className: "key",
		subText: undefined
	},
	{
		text: "R",
		className: "key text-r",
		subText: undefined
	},
	{
		text: "T",
		className: "key",
		subText: undefined
	},
	{
		text: "Y",
		className: "key",
		subText: undefined
	},
	{
		text: "U",
		className: "key",
		subText: undefined
	},
	{
		text: "I",
		className: "key",
		subText: undefined
	},
	{
		text: "O",
		className: "key text-o",
		subText: undefined
	},
	{
		text: "P",
		className: "key text-p",
		subText: undefined
	},
	{
		text: "[",
		className: "key",
		subText: "{",
	},
	{
		text: "]",
		className: "key",
		subText: "}",
	},
	{
		text: "<------",
		className: "key enter1",
		subText: undefined
	}
]

const row4: KeyProps[] = [
	{
		text: "caps",
		className: "key caps",
		subText: undefined
	},
	{
		text: "A",
		className: "key text-a",
		subText: undefined
	},
	{
		text: "S",
		className: "key",
		subText: undefined,
	},
	{
		text: "D",
		className: "key text-d",
		subText: undefined
	},
	{
		text: "F",
		className: "key",
		subText: undefined
	},
	{
		text: "G",
		className: "key text-g",
		subText: undefined
	},
	{
		text: "H",
		className: "key",
		subText: undefined
	},
	{
		text: "J",
		className: "key",
		subText: undefined
	},
	{
		text: "K",
		className: "key",
		subText: undefined
	},
	{
		text: "L",
		className: "key",
		subText: undefined
	},
	{
		text: ";",
		className: "key",
		subText: ":"
	},
	{
		text: "'",
		className: "key",
		subText: "\"",
	},
	{
		text: "\\",
		className: "key",
		subText: "|",
	},
	{
		text: undefined,
		className: "key enter2",
		subText: undefined
	}
]

const row5: KeyProps[] = [
	{
		text: "shitf",
		className: "key shitf",
		subText: undefined
	},
	{
		text: ".",
		className: "key",
		subText: "~"
	},
	{
		text: "Z",
		className: "key",
		subText: undefined
	},
	{
		text: "X",
		className: "key",
		subText: undefined,
	},
	{
		text: "C",
		className: "key",
		subText: undefined
	},
	{
		text: "V",
		className: "key",
		subText: undefined
	},
	{
		text: "B",
		className: "key",
		subText: undefined
	},
	{
		text: "N",
		className: "key text-n",
		subText: undefined
	},
	{
		text: "M",
		className: "key text-m",
		subText: undefined
	},
	{
		text: "`",
		className: "key",
		subText: "<"
	},
	{
		text: ".",
		className: "key",
		subText: ">"
	},
	{
		text: "/",
		className: "key",
		subText: "?"
	},
	{
		text: "shitf",
		className: "key shitf2",
		subText: undefined
	},
	{
		text: undefined,
		className: "key orange up",
		subText: undefined,
	},
]

const row6: KeyProps[] = [
	{
		text: "ctrl",
		className: "key ctrl",
		subText: "^"
	},
	{
		text: "fn",
		className: "key",
		subText: undefined
	},
	{
		text: "alt",
		className: "key",
		subText: undefined,
	},
	{
		text: "home",
		className: "key home",
		subText: undefined
	},
	{
		text: undefined,
		className: "key space",
		subText: undefined
	},
	{
		text: "alt",
		className: "key",
		subText: undefined
	},
	{
		text: "fn",
		className: "key fn",
		subText: undefined
	},
	{
		text: undefined,
		className: "key orange lef",
		subText: undefined
	},
	{
		text: undefined,
		className: "key orange bottom",
		subText: undefined
	},
	{
		text: undefined,
		className: "key orange right",
		subText: undefined
	}
]

function Key({ text, subText, className }: KeyProps) {
	return (
		<div className={className}>
			<div>
				<div>
					<div>
						<span>{text}</span>
						<span>{subText}</span>
					</div>
				</div>
			</div>
		</div>
	)
}