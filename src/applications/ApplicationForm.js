import { useState } from 'react';

import { postApplication } from '../hooks/useApplications';

const ApplicationForm = ({ setSuccess }) => {
    const defaultLinks = [{
        id: 'social',
        name: 'Twitter/Farcaster',
        description: 'Please share the link to your Twitter/Farcaster profile.',
        placeholder: '@username',
        required: true,
    }, {
        id: 'github',
        name: 'GitHub',
        description: 'Where can we find your code, writing, or other public releases?',
        placeholder: 'username',
        required: true,
    }, {
        id: 'discord',
        name: 'Discord',
        description: 'Please share your Discord username with the # included',
        placeholder: 'username#1234',
        required: true,
    }, {
        id: 'project',
        name: 'Living Web3 Project',
        description: 'Instead of a resume, cosanostra asks for a link and breakdown of a recent project of yours!',
        placeholder: 'https://example.com',
        required: true,
    }, {
        id: 'project_description',
        name: '',
        description: '',
        placeholder: 'Your role and contribution to the project.',
        required: true,
        long: true,
    }, { 
        id: 'compensation',
        name: 'Compensation',
        description: 'What size compensation package are you looking for?',
        placeholder: '0.00',
        required: true,
    }]

    const [links, setLinks] = useState(defaultLinks);

    const handleLinkAdd = () => {
        setLinks([...links, {
            name: `Extra Link ${links.length - defaultLinks.length + 1}`,
            description: 'Any reference link.',
            placeholder: 'https://example.com',
            required: false,
        }]);
    }

    const handleLinkChange = (index, name, value) => {
        const newLinks = [...links];
        newLinks[index][name] = value;
        setLinks(newLinks);
    }

    const handleLinkRemove = (index) => {
        const newLinks = [...links];
        newLinks.splice(index, 1);
        setLinks(newLinks);
    }

    const handleFormSubmission = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        // confirm that all required fields have been met
        const requiredFields = links.filter(link => link.required);
        const requiredFieldsMissing = requiredFields.filter(field => !data[field.id]);

        // Loop through all the links and remove if no longer has error or added if not already showing
        const newLinks = [...links];
        newLinks.forEach((link, index) => {
            if (requiredFieldsMissing.includes(link)) {
                if (!link.error) {
                    newLinks[index].error = true;
                }
            } else {
                if (link.error) {
                    delete newLinks[index].error;
                }
            }
        });

        // all the value to .error of the link of the has error
        if (requiredFieldsMissing.length > 0) {
            return;
        }

        // confirm that discord has the # in it
        if (data.discord && !data.discord.includes('#')) {
            const index = links.findIndex(link => link.id === 'discord');
            const newLinks = [...links];
            newLinks[index].error = "Please include the # in your Discord username.";
            setLinks(newLinks);
            return;
        }

        await postApplication(data)
            .then(response => {
                e.target.reset(); 
                setSuccess(true);
            })
            .catch(err => {
                setSuccess(false);
            });
    }

    return (
        <form onSubmit={handleFormSubmission}>
            {links.map((link, index) => (
                <div
                    className="form-group"
                    key={index}
                >
                    <div>
                        <label htmlFor="link">{link.name}</label>
                        {link.description && <small><p>{link.description}</p></small>}
                    </div>

                    <div key={index}>
                        <div
                            className={`input-group ${!link.required ? 'input-group-append' : ''}`}
                        >
                            {link.long ? (
                                <textarea
                                    className={`${link.error ? 'is-invalid' : ''}`}
                                    type="text"
                                    name={link.id}
                                    placeholder={link.placeholder}
                                    value={link.value || ''}
                                    onChange={(e) => handleLinkChange(index, 'value', e.target.value)}
                                />
                            ) : (
                                <input
                                    className={`${link.error ? 'is-invalid' : ''}`}
                                    type="text"
                                    name={link.id}
                                    placeholder={link.placeholder}
                                    value={link.value || ''}
                                    onChange={(e) => handleLinkChange(index, 'value', e.target.value)}
                                />
                            )}

                            {link.error && <div className="invalid-feedback">
                                <small><p>{link.error}</p></small>
                            </div>}

                            {!link.required && <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={() => handleLinkRemove(index)}
                            >Remove</button>}
                        </div>
                    </div>
                </div>
            ))}

            <div className="controls">
                <button onClick={handleLinkAdd}>
                    Add link
                </button>
                <button className="primary" type="submit">Submit application</button>
            </div>
        </form>
    )
}

export default ApplicationForm;