import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import { motion } from 'framer-motion'

function Checkbox(props) {
    const { label, name, options, ...rest } = props
    return (
        <div>
            
            <label>{label}</label>
            <Field name={name} {...rest}>
            
            {({ field }) => {
                
                return options.map(option => { 
                    
                return (
                    
                    <React.Fragment key={option.key}>
                        <motion.td whileHover={{scale:1.03}}>  
                        <input
                            type='checkbox'
                            className='check'
                            id={option.value}
                            {...field}
                            value={option.value}
                            checked={field.value.includes(option.value)}
                        />
                        &nbsp;
                        <label htmlFor={option.value} id='clabel'>{option.key}</label>
                        &nbsp; &nbsp; &nbsp;
                        </motion.td> 
                    </React.Fragment>  
                    
                )}
            )}} 
            </Field>
       
            <ErrorMessage name={name} component={TextError}/>

        </div>
    )
}

export default Checkbox

