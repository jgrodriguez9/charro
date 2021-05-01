import { Image } from 'react-bootstrap';
import { LoopCircleLoading } from 'react-loadingg';
import logoLoad from '../img/logoload.png'
import './Loading.css'

const commonStyle = {
    margin: 'auto',
    /*position: 'initial',*/
    left: 0,
    right: 0,
    top:10,
    bottom:10
};

function Loading({texto}) {
    return  (
        <div className="react-loader-overlay">
            <Image src={logoLoad} fluid className="wh-100"/>
            {/* <div className="react-confirm-alert">
                <div className="custom-uii">
                        <LoopCircleLoading color={"black"} style={commonStyle}/>
                </div>
            </div> */}
        </div>
    )
}

export default Loading