import React, { Component } from 'react'
import "./BaiTapThuKinh.css"
import Header from './Header';
import DanhSachSanPham from './DanhSachSanPham';
export default class BaiTapThuKinh extends Component {
    arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 4, price: 30, name: 'DIOR D6005U', url:  './img/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 5, price: 30, name: 'PRADA P8750', url: './img/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 6, price: 30, name: 'PRADA P9700', url: './img/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 7, price: 30, name: 'FENDI F8750', url: './img/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 8, price: 30, name: 'FENDI F8500', url: './img/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 9, price: 30, name: 'FENDI F4300', url: './img/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
    ];
    state ={
        sanPhamThu :[{
            url:'./img/v1.png',
            name:'GUCCI G8850U',
            desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '
        }]
    };
    thuKinh = (spClick)=>{
        console.log('spClick',spClick);
        this.setState({
            sanPhamThu : spClick,
        })
    };
    render() {
        //gom nhóm state
        let {url,name,desc} = this.state.sanPhamThu;
        return (
            <div className="background">
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-6 my-3">
                            {/* //Model thử kính  */}
                            <div className="model">
                                <img style={{ width:'50%'}} src="./img/model.jpg" alt=""/>
                                <div className="thuKinh">
                                    <img style={{ width:'55%'}}src={url} alt=""/>
                                </div>
                                <div className="model__info">
                                    <h3 className="text-left">{name}</h3>
                                    <p className="text-left">{desc}</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-6 my-3">
                            <img style={{ width:'50%'}} src="./img/model.jpg" alt=""/>
                        </div>
                    </div>
                    
                </div>
                <div className="container">
                    <div className="sanPham">
                        <div className="row">
                            <DanhSachSanPham mangSanPham ={this.arrProduct} thuKinh={this.thuKinh}/>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
