import React from 'react';
import style from './Present.module.css';

const Present = (props) => {
	let image0 = props.none;
	let image1 = props.Cross;
	let image2 = props.Zero;
	let str = [];
	let a = (y,x) => {
		//alert([y,x]);
		props.move(y,x);
	}
	const newScreen = () => {
		for(let y=0;y<3;y++){
			for(let x=0;x<3;x++){
				let img = image0;
				if(props.table[y][x] == 0){
					img = image0;
				}
				else if(props.table[y][x] == 1){
					img = image1;
				}
				else if(props.table[y][x] == 2){
					img = image2;
				}
				str.push(<img onClick={() => a(y,x)} className={style.logo} src={img}/>);
			}
			str.push(<br/>)
		}
	}
	newScreen();
	return(
		<div className={style.logo}>
			{str}
		</div>
	)
};

export default Present;
