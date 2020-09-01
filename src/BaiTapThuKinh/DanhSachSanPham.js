import React, { Component } from 'react'
import SanPham from './SanPham'

export default class DanhSachSanPham extends Component {

    renderSanPham = () => {
        return this.props.mangSanPham.map((sanPham,index)=>{
            return (
                <div className="col-2 p-2" key={index}>
                    <SanPham sanPham={sanPham} thuKinh={this.props.thuKinh}/>
                </div>
                
            )
        })
    }
    render() {
        return (
            <div className="row">
                
                {this.renderSanPham()}
            </div>
        )
    }
}
