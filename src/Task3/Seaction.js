import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
// import Button from 'react-bootstrap/Button';
// import "./Seaction.css"

const Container = () => {
    const [sections, setSections] = useState([]);
    const [header, setHeader] = useState('');
    const [details, setDetails] = useState('');

    const addSection = () => {
        const newSection = {
            header,
            details
        };

        setSections([...sections, newSection]);
        setHeader('');
        setDetails('');
    };

    return (
       <div className='container mt-5'>
            <div className='card'>
                <div className='card-body'>
                     <div className='row'>
                            <div className='col-sm-4 from-control border mx-auto'>
                                <h2>Add Section</h2>
                                <div className="">
                                    <label htmlFor="header">Section Header</label><br />
                                    <InputText className='form-control'
                                        id="header"
                                        value={header}
                                        onChange={(e) => setHeader(e.target.value)}
                                    />
                                </div>
                                <div className="sesction">
                                    <label htmlFor="details">Section Details</label><br />
                                    <textarea className='form-control'
                                        id="details"
                                        type='textarea'
                                        value={details}
                                        onChange={(e) => setDetails(e.target.value)}
                                    />
                                </div>
                                <div className='mt-4 mb-4'>
                                <Button variant="primary" label="Add"  onClick={addSection} className="custom-button form-control btn-primary" />
                                </div>
                        </div>
                        <div className='col-sm-6 from-control border mx-auto'>
                        <Accordion className='from-control'  multiple activeIndex={[0]}>
                    {sections.map((section, index) => (
                        <AccordionTab className='from-control' key={index} header={section.header}>
                            <p>{section.details}</p>
                        </AccordionTab>
                          ))}
                         </Accordion>
                        </div>
                    </div>
                </div>
            </div> 
       </div>
    );
};

export default Container;