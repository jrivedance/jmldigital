import React, { useEffect, useState } from 'react';
import { send } from 'emailjs-com';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import FormikControl from './FormikControl'
import Success from './Success.js';

            const checkboxOptions = [
                { key: 'Web', value: '  Web' },
                { key: 'Video', value: '  Video' },
                { key: 'Graphic', value: '  Graphic' },
                { key: 'Other', value: '  Other' }
            ]

            const initialValues = {
                name: '',
                email: '',
                checkboxOption: [],
                message: ''
            }

            const validationSchema = Yup.object({
                name: Yup.string().min(3, 'Too Short').required('Required!'),
                email: Yup.string().email('Must be a valid email').required('Required!'),
                checkboxOption: Yup.array().required('Required!'),
                message: Yup.string()
            })
                
            
            
function Footer () {
    
    const [showSuccess, setshowSuccess] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setshowSuccess(false)
        }, 3000)
      })
    
    return (  
        <div>
            
            <div className="third">
                <h3>
                    Contact
                </h3>
                <h4>
                <i className="material-icons">
                    phone_iphone
                </i>
                    (719) 761-5250 
                    &nbsp;
                </h4> 
                <h4>
                <i className="material-icons">
                    mail
                </i>
                    Jordan.Lugenbeel
                    &nbsp;
                <br/>
                    @gmail.com 
                    &nbsp;
                </h4>
            </div>

            <div className="twothird">
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                validateOnMount
            >

            {formik => {
            return (
                <Form>

                    <FormikControl
                        control='input'
                        type='text'
                        name='name'
                        id="input"
                        placeholder='Your Name'
                    />
                <br/>
                    <FormikControl 
                        control='input'
                        type="text" 
                        name="email" 
                        id="input" 
                        placeholder='Your Email'  
                    />
                <br/>
                    <FormikControl
                        control="checkbox"
                        name="checkboxOption" 
                        id="checkbox" 
                        options={checkboxOptions}
                    />
                <br/>
                    <FormikControl
                        control="textarea"
                        name="message" 
                        id="inputarea" 
                        placeholder='Your Message' 
                    />
                <br/>                   
                    <motion.button 
                        whileHover={{scale: 1.1}}
                        type='submit' 
                        className='form-submit-button'
                        disabled={!formik.isValid || formik.isSubmitting}
                        onClick={() => {
                            setshowSuccess(true)
                          }}
                    >
                        Submit
                    </motion.button>

                    <motion.button 
                        whileHover={{scale: 1.1}}
                        type='reset' 
                        className='form-reset-button'
                    >
                        Reset
                    </motion.button>
                    <Success showSuccess={showSuccess} setshowSuccess={setshowSuccess}/>

                </Form>
                )}}
            </Formik>
            </div>

        <div className="space"></div>

            <img src="images/JMLHex3.png" alt="JML Digital" />

            <div className="smtopbot">
                <p>
                <i className="material-icons">
                    copyright
                </i>
                    Jordan Michael Lugenbeel 2021
                </p>
            </div>

            <img src="images/JMLHex4.png" alt="JML Digital" />
        
        <div className="space"></div>

        </div>
    );
}

const onSubmit = (values, onSubmitProps) => {
    send(
        'service_ovdhe76',
        'template_uqaw5uo',
        values,
        'user_xBYjkxSEAay5PtGDOkoCE'
    )
    .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
    console.log('FAILED...', err);
    })
    onSubmitProps.resetForm()
}

export default Footer
