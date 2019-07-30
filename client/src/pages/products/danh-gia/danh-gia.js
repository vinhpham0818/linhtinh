import React from 'react'
import './danh-gia.scss'
import Star1 from '../../../asstes/images/star.svg'
import Star2 from '../../../asstes/images/star1.svg'

class DanhGia extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="main-danh-gia">
                    <img src={Star1}></img>
                    <img src={Star1}></img>
                    <img src={Star1}></img>
                    <img src={Star1}></img>
                    <img src={Star2}></img>
                </div>
            </React.Fragment>
        )
    }
}

export default DanhGia