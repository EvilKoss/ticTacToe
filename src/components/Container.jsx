import Present from './Present';
import Reducer from './Reducer';
import {move,win} from './Reducer';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return{
		Cross: state.combine.srcCross,
		Zero: state.combine.srcZero,
		Emptiness: state.combine.srcEmptiness,
		whoMove: state.combine.whoMoves,
		table: state.combine.table,
		none: state.combine.srcNone
	}
}

const mapDispatchToProps = {
	move,win
}

const Container = connect(mapStateToProps,mapDispatchToProps)(Present);

export default Container;
