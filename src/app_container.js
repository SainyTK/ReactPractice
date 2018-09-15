import App from './App'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        number : state.number,
        prevAction : state.prevAction
    }
}

const mapDispatchToProps = (action) => {
    return {
        add : () => action({ type:'ADD'}),
        sub : () => action({ type:'SUB'}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)