import Home from './home'
import Link from 'umi/link';
import home from './home';
export default function (props){
    return(
        <div>
            <Link to="/index/home" component={Home}/>
        </div>
    )
}