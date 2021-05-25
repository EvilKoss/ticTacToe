const MOVE = 'MOVE';

const WIN = 'WIN';

const initialState = {
	whoMoves:1,
	table:[
		[0,0,0],
		[0,0,0],
		[0,0,0]
	],
	srcNone:'https://impult.ru/preview/r/456x456/upload/iblock/d4d/d4d88356cd60e1ea3a2beac6207b4522.jpg',
	srcCross:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIoY2aw-B_rhpJn9AxCGJWHLnSXeLf2b3fLJvPFa6NSRzETx25&usqp=CAU',
	srcZero:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3WhR1eFZ-ewqQ5hpqLIl21nxVvn5Hfi4qFTmTyeP0FVhQatQS&usqp=CAU',
	srcEmptiness:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'
}

const Reducer = (state = initialState,action) => {
	switch(action.type){
		case MOVE:
			{
				let bool = false;
				let newGame = [[0,0,0],[0,0,0],[0,0,0]];
				let newTable = [...state.table];
				let i = state.whoMoves;
				const winner = (y0,x0,y1,x1,y2,x2) => {
					if(newTable[y0][x0] == newTable[y1][x1] &&
						newTable[y0][x0] == newTable[y2][x2] &&
						newTable[y0][x0] != 0){
						bool = true;
						if(i % 2 == 0){
							alert('Победа крестиков');
						}
						else alert('Победа ноликов');
						newTable = newGame;
						i = 1;
					}
				}
				if(newTable[action.y][action.x] == 0){
					newTable[action.y][action.x] = state.whoMoves % 2 == 0 ? 2 : 1;
					i++;
				}
				winner(0,0,0,1,0,2);

				winner(1,0,1,1,1,2);

				winner(2,0,2,1,2,2);

				winner(0,0,1,0,2,0);

				winner(0,1,1,1,2,1);

				winner(0,2,1,2,2,2);

				winner(0,0,1,1,2,2);

				winner(0,2,1,1,2,0);

				if(i == 10 && bool == false){
					newTable = newGame;
					i = 1;
					alert('Ничья');
				}

				return {...state,whoMoves:i,table:newTable};
			}
		case WIN:
			{
				return state;
			}
		default:
			return state;
	}
}

export const move = (y,x) => ({type:MOVE,y:y,x:x});

export const win = () => ({type:WIN});

export default Reducer;
