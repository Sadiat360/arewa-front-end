import './FormModal.scss'
import CancelSvg from '../../svgs/CancelSvg/CancelSvg';
import { useState } from 'react';

function FormModal({toggleModal,handleFormSubmit}){
    const [formValues,setFormValues] = useState({user:'', comment:'', file: null})
    // console.log(formValues)

    function handleInputChange(event){
        const{ name,value} = event.target;

        if(formValues === ''){
            alert('All input fields must be filled');
        }

        setFormValues ({
            ...formValues,
            [name]: value,
        }) 

    }
    function handleFileChange(event){
        setFormValues({
            ...formValues,
            file: event.target.files[0]
        })
    }
    function onSubmit(event){
        event.preventDefault();
        handleFormSubmit(formValues);

        setFormValues({user:'', comment:'',file:''})
       
    }

    return(
        <article className="modal">
            <div className="modal-container">
                <div className='modal-header'>
                <h2 className='modal-heading h2'>Rate Product</h2>
                <button className='modal-close' onClick={toggleModal}><CancelSvg /></button>
                </div>
                
                <form onSubmit={onSubmit}className="modal-form" action="" >
                    <div className='modal-box'>
                    <label className='modal-label h3' htmlFor="name">Review Title</label>
                    <input className='modal-input' 
                    onChange={handleInputChange}
                    type="text" 
                    name="user" 
                    id=""
                    value={formValues.user} />
                    </div>
                    <div className='modal-box'>
                    <label className='modal-label h3' htmlFor="">Review</label>
                    <textarea  
                    className='modal-input'
                    onChange={handleInputChange}
                    name="comment"
                    id="" 
                    rows={10}
                    value={formValues.comment}
                    ></textarea>
                    </div>
                   <div className='modal-box'>
                   <label className='modal-label h3' htmlFor="">Add image</label>
                   <input className='modal-input'
                   onChange={handleFileChange}
                    type='file'
                    accept='image/*'
                    oncChange={handleFileChange}
                    // value={formValues.reviewImage}
                     />

                   </div>
                  <button className='modal-form__btn'>Post Review</button>
                </form>
            </div>
        </article>
    )
}
export default FormModal;