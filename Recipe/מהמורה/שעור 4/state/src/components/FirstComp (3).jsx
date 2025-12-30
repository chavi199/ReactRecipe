import SecComp from "./SecComp"

const FirstComp = (props) => {


    return(
        <>
        {props.count}
        <br/>
        <SecComp name={props.name}/>
        </>
    )
}

export default FirstComp