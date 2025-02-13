import './FormModal.scss'
import CancelSvg from '../../svgs/CancelSvg/CancelSvg';
function FormModal({toggleModal}){

    

    return(
        <article className="modal">
            <div className="modal-container">
                <div className='modal-header'>
                <h2 className='h2'>Rate Product</h2>
                <button className='modal-close' onClick={toggleModal}><CancelSvg /></button>
                </div>
                
                <form className="modal-form" action="">
                    <div className='modal-box'>
                    <label className='modal-label h3' htmlFor="name">Review Title</label>
                    <input className='modal-input' type="text" name="" id="" />
                    </div>
                    <div className='modal-box'>
                    <label className='modal-label h3' htmlFor="">Review</label>
                    <textarea  className='modal-input'name="comment" id="" rows={10}></textarea>
                    </div>
                   <div className='modal-box'>
                   <label className='modal-label h3' htmlFor="">Add image</label>
                   <input className='modal-input' type="file" />

                   </div>
                  <button className='modal-btn'>Post Review</button>


                </form>
            </div>
        </article>
    )
}
export default FormModal;