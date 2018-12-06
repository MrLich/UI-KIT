import React from 'react';
import ReactModal from 'react-modal';
import '../../../../../web/css/bootstrap.min.css';
import ButtonText from '../ButtonText';
const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
}

export default class ModalCommon extends React.Component {
    static setAppElement(elementName) {
        ReactModal.setAppElement('#' + elementName);
    }
    render() {
        const props = this.props;
        return <ReactModal
            isOpen={props.visible}
            onAfterOpen={props.onShow}
            onRequestClose={props.onRequestClose}
            style={{ ...props.style, ...{ overlay: overlayStyle } }}
        >
        <div className="containModal">
            <div className="modalItem1">
                { props.types == 'modal01' ?  
                    <p className="txtTitle">{props.txtTitle ? props.txtTitle : 'Bạn chưa nhập title'}</p> :
                    props.types == 'modal02'
                    ?
                    <p className="txtTitleModal02">{props.txtTitle ? props.txtTitle : 'Bạn chưa nhập title dialog'}</p> 
                    : <img src={props.source.uri || props.source} height={props.height} width={props.width} class="img_avatar"/>
            }
               
            </div>
            <div className={'modalItem2  style-' + (props.types)}>
                <p className={'txtContent text-' + (props.txtAlign || 'center')}>{props.txtContent ? props.txtContent :  'Bạn chưa nhập content'} </p>
            </div>
            {props.types == 'modal01' ? 
            <div className="modalItem3">
                <p className="txtDetail">{props.txtDetail ? props.txtDetail :  'Bạn chưa nhập thông tin chi tiết'}</p>
                <a className="txtPolicy">{props.txtPolicy ? props.txtPolicy : 'Bạn chưa nhập chính sách' }</a>
            </div> : null 
            }
            
            { 
                (props.types == 'modal01' ||  props.types == 'modal03')
                ? 
                <div className="button1">
                    <ButtonText text={props.nameButton1 ? props.nameButton1 : 'Đóng'} onPress={props.onCloseModal1} />
                </div>
                :
                <div className="button2">
                    <ButtonText text={props.nameButton1 ? props.nameButton1 : 'Hủy'} type='dark' onPress={props.onCloseModal2} />
                    <ButtonText text={props.nameButton2 ? props.nameButton2 : 'Gọi'} onPress={props.onCloseModal2} />
                </div>
            }
        </div>
        </ReactModal>
    }
}
