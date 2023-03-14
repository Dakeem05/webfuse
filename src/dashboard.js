import { useState, useEffect} from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Div, H1, Span1, H3, H4, Form,Input, Button, Div2, Button2, Span3} from "./Components/Div.style"


function Dashboard () {
    const [isClicked,setIsClicked] = useState(false)
    const [emailInput, setEmailInput] = useState('');
    const [waitList, setWaitList] = useState([]);
    let mail = "";
    let display ="";

    //Alert function
    const notify = (message) => {
        toast.error( message , {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    };

    //submit email handler function
    function submitEmailHandler (){
        setWaitList(JSON.parse(localStorage.getItem("waitist")));
        console.log(emailInput);
        
        const waitlist ={
            id: waitList.length == 0 ? 1 : waitList[waitList.length - 1].id + 1, 
            email: emailInput,
        }
        
        let shouldAdd = true;
                    
        //authentication to ensure an email is not inputed twice
        waitList.forEach( (elem) =>{
            if(elem.email === emailInput){
                shouldAdd = false
                notify("Email already exists")
                }
            return shouldAdd
            })
            if(shouldAdd) {
                waitList.push(waitlist)
                localStorage.setItem("waitist", JSON.stringify(waitList));
            }
        
        //authentication to push in waitlist into an empty array called waitList
        if(waitList.length === 0){
            waitList.push(waitlist);
            localStorage.setItem("waitist", JSON.stringify(waitList));
        }   
    
        //to display the email and the id inputed on the screen
        display = "";
        JSON.parse(localStorage.getItem("waitist")).map((item) =>{
            display += `<h2 className= 'new'> ${item.id}. ${item.email} <h2>`
        });
        document.querySelector(".waitlist").innerHTML = display
    }

    //to handle the input change in the text box
    function inputEmailHandler (e){
        mail = e.target.value;
        if(mail === "") {
            document.querySelector("#btn").disabled = true;
        } else {
            document.querySelector("#btn").disabled = false;  
        }
        setEmailInput(mail.toLowerCase())
    }

    //handles the use effect 
    useEffect(() => {
        setWaitList(JSON.parse(localStorage.getItem("waitist")));
        if(waitList.length === 0){
            return localStorage.setItem("waitist", JSON.stringify(waitList));
        }else{
            JSON.parse(localStorage.getItem("waitist")).map((item) =>{
                display += "<h2>"
                display += `${item.id}. ${item.email}`
                display += "<h2>"
            });
            document.querySelector(".waitlist").innerHTML = display
        }
    }, [])
 
    //prevents form default action
    const  stopSubmit = (e) => {
            e.preventDefault()
            submitEmailHandler();      
        }

    return(
        <div  className='App'>
            <Div className='div'>
                <Span3  style={{
                            left: isClicked === true? "-46vw" : "9vw" ,
                            color: "rgb(241, 206, 155)"
                    }}>w3bfuse
                    <Button2 id='buton'  onClick={()=>{setIsClicked(true)}}>Proceed</Button2>
                </Span3>
                <Span1 id='display' style={{
                            left: isClicked === true? "-45vw" : "30vw"
                        }}> 
                    <H1>w3bfuse</H1>
                    <H3>Welcome to w3bfuse waitlist </H3>
                    <H4>Join the web3 train</H4>
                    <Form onSubmit={stopSubmit}  >
                        <Input id='id'  required onChange={inputEmailHandler} type="email" placeholder="Enter your email" />
                        <Button id='btn'   disabled type="submit" onClick={submitEmailHandler}>Submit</Button>          
                        <Div2 className="waitlist"></Div2>
                    </Form>
                </Span1>
                <ToastContainer
                    position="top-center"
                    autoClose={500}
                    limit={1}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </Div> 
        </div>
    )}

export default Dashboard;