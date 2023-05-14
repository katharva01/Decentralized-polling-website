import { Injectable } from '@angular/core';
import Web3 from 'web3';
import {Contract} from 'web3-eth-contract';

const contractAbi = require("./contractAbi.json");
declare var window : any;

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  private web3: Web3;
  private contract : Contract;
  private contractAddress = "0x3aD096bB427FfE726E402Ad25678030D17e3CC02";

  constructor() { 
    if(window.web3){
      this.web3 = new Web3(window.ethereum);
      this.contract = new this.web3.eth.Contract(
        contractAbi,
        this.contractAddress
      );
      window.ethereum.enable().catch((err:any)=>console.log(err));
    }
    else{
      console.log("Metamask not found, install or enable metamask");
    }
  }

  getAccount(): Promise<string>{
    return this.web3.eth.getAccounts().then((accounts)=>accounts[0]) || '';
  }

  async executeTransaction( fnName:string ,...args:any[]): Promise<void>{
    const acc = await this.getAccount()
    this.contract.methods[fnName](...args).send({from:""});
  }

}
