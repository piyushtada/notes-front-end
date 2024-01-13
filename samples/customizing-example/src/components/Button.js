const onClickHandler = () => {
    console.log('Clicked');
}

function Button(){
    return (
        <button onClick={onClickHandler}>Click me</button>
    );
}

export default Button;