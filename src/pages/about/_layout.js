export default function(props){
    return(
        <div>
            <h1>顶层</h1>
            
            <hr/>
            {props.children}
        </div>
    )
}