import { useState } from 'react';

import useMousePosition from '../hooks/useMousePosition';

import Meta from '../seo/Meta';

import Title from '../title/Title';

import ApplicationForm from './ApplicationForm';
import ApplicationSuccess from './ApplicationSuccess';
import ApplicationError from './ApplicationError';

import "./Application.css";

const Application = () => {
    const title = "apply | cosanostra";
    const description = "apply to join the cosanostra collective. we are a group of crypto developers and web3 operators building value-driven primitives for on-chain organizations and always looking to grow the family.";

    const pageTitle = "Think you're a good fit for cosanostra?";

    const [success, setSuccess] = useState(undefined);

    const [ref, mousePosition] = useMousePosition();

    return (
        <>
            <Meta title={title} description={description} />

            <div className="paper" ref={ref}>
                <Title title={pageTitle} mousePosition={mousePosition} />

                <div className="container">
                    <p className="lead">At all times, cosanostra operates with open positions for operators, front-end, back-end, on-chain developers, designers, mathematicians; experts. Fill out an basis sheet below and tell us why you want to join cosanostra! Notice, we are not asking for your resume. Show us who you are in Web3! <strong>cosanostra carries no temporal experience requirements.</strong></p>

                    {success === undefined ? 
                        <ApplicationForm setSuccess={setSuccess}/> :
                        success === true ? 
                            <ApplicationSuccess /> : 
                            <ApplicationError />
                    }
                </div>
            </div >
        </>
    )
}

export default Application;