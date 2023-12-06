class ReactContainer extends React.Component{
    render(){
        return (
            <div>Hello! Welcome to Kalvium   
               <div>Let's rock and roll-this is babel</div>
           </div> )
    }
}

const container = document.getElementById('react-container');
ReactDOM.render(<ReactContainer/>,container);  