import PropTypes from 'prop-types';
import Web3 from 'web3';
import { useNavigate } from 'react-router-dom';
import ABI from "./ABI.json";
const Wallet =({saveState})=>{
    const navigateTo=useNavigate()
    const connectWallet=async()=>{
        try{
            if(window.ethereum){
                const web3=new Web3(window.ethereum);
                
                const accounts=await window.ethereum.request({
                    method:"eth_requestAccounts"
                })
                const contractAddress="0x90ec4477fbe75d3a2a2d16a5fc00f26319b11387";
                const contract=new web3.eth.Contract(ABI,contractAddress);
                saveState({web3:web3,contract:contract,account:accounts[0]})
                navigateTo("/view-all-tasks")
            }else{
                throw new Error
            }
            
        }catch(error){
            console.error(error)
        }
    }
    return<><button onClick={connectWallet}>Connect Wallet</button></>
}
Wallet.propTypes={
    saveState:PropTypes.func.isRequired,
}

export default Wallet;