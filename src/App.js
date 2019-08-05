import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';


import Header from './Components/header';
import Carousel from './Components/carousel';
import Promotion from './Components/promotion';
import Smartphone from './Components/Smartphone';
import Laptop from './Components/Laptop';

//import data
import smartphonee from './Data/smartphonedata';
import laptopdata from './Data/laptopdata';


class App extends Component {
//  constructor(props){
//    super(props);
//    this.state={
//      spInfo : smartphonee,
//      spLT : laptopdata,
//    }
//  }
//   render() {
//     let SanPhamSP = this.state.spInfo.map((sp,index)=>{
//       return (
//         <Smartphone id={sp.id} key={index} Name = {sp.name} Price = {sp.price} Desc={sp.desc} Url={sp.img} ></Smartphone>
//       )
//     });

    
//     let SanPhamLT = this.state.spLT.map((lt,index)=>{
//       return(
//         <Laptop></Laptop>
//       )
//     })


constructor(props){
  super(props);
  this.state={
    spInfor : smartphonee,
    spLt : laptopdata,
  }
}
render() {
  let SanPhamSP = this.state.spInfor.map((sp,index)=>{
    return(
      <Smartphone  id={sp.id} key={index} Name = {sp.name} Price = {sp.price} Desc={sp.desc} Url={sp.img}></Smartphone>
    )
  })
  let SanPhamLT = this.state.spLt.map((lt,index)=>{
    return(
      <Laptop   id={lt.id} key={index} Name = {lt.name} Price = {lt.price} Desc={lt.desc} Url={lt.img}  Screen={lt.screen}  CPU={lt.cpu}  RAM={lt.ram}></Laptop>
    )
  })
    
    return (
        
        <div className="App">
          <Header></Header>
          <Carousel></Carousel>

          <section id="smartphone" className="container-fluid pt-5 pb-5">
            <h1 className="text-dark text-center">BEST SMARTPHONE</h1>
            <div className="row" style={{ paddingLeft: "50px" }}>
            {SanPhamSP}
            </div>
          </section>

          <section id="laptop" className="container-fluid pt-5 pb-5">
            <h1 className="text-dark text-center">BEST LAPTOP</h1>
            <div className="row" style={{ paddingLeft: "50px" }}>
            {SanPhamLT}
            </div>
          </section>
          <Promotion></Promotion>
          
        </div>

    );
  }
}

export default App;
