import Link from 'umi/link';
import { connect } from 'dva';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function index(props){
    // props.dispatch({
    //     type:'getproduct/pro',
    //     payload:{per:10,page:1,name:1}
    // })
    return(
        <div>
            {/* {props.list} */}
        </div>
        
    )
}
export default connect(state=>state.getproduct)(index)