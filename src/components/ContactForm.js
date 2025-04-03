import React, { useState, useEffect } from 'react';

const ContactForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        consent: false,
    });

    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState('');

    const draftKey = 'contactFormDraft';

    // Load saved draft
    useEffect(() => {
        const saved = localStorage.getItem(draftKey);
        if (saved) {
            setForm(JSON.parse(saved));
        }
    }, []);

    // Save draft on form change
    useEffect(() => {
        localStorage.setItem(draftKey, JSON.stringify(form));
    }, [form]);

    const sanitize = {
        name: (val) => /^[A-Za-zÀ-ÿ\s'-]+$/.test(val),
        email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        subject: (val) => /^[A-Za-z\s]+$/.test(val),
        message: (val) => !/[<>]/.test(val),
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!sanitize.name(form.name)) newErrors.name = 'Invalid name';
        if (!sanitize.email(form.email)) newErrors.email = 'Invalid email';
        if (!sanitize.subject(form.subject)) newErrors.subject = 'Subject must be letters only';
        if (!sanitize.message(form.message)) newErrors.message = 'Message contains invalid characters';
        if (!form.consent) newErrors.consent = 'You must agree to be contacted';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await fetch('http://localhost:3001/messages', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(form),
                });

                if (!response.ok) throw new Error('Submission failed');

                localStorage.removeItem(draftKey);
                setForm({ name: '', email: '', subject: '', message: '', consent: false });
                setSubmitStatus('Message sent successfully!');
            } catch (err) {
                setSubmitStatus('Error sending message. Try again later.');
                console.error(err);
            }
        } else {
            setSubmitStatus('');
        }
    };

    return (
        <div className="container mt-4">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} className="form-control" />
                    {errors.name && <div className="text-danger">{errors.name}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control" />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input type="text" name="subject" value={form.subject} onChange={handleChange} className="form-control" />
                    {errors.subject && <div className="text-danger">{errors.subject}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} className="form-control" />
                    {errors.message && <div className="text-danger">{errors.message}</div>}
                </div>

                <div className="form-check mb-3">
                    <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} className="form-check-input" />
                    <label className="form-check-label">
                        I agree to be contacted and understand my info will be stored securely.
                    </label>
                    {errors.consent && <div className="text-danger">{errors.consent}</div>}
                </div>

                <button type="submit" className="btn btn-primary">Send</button>
                {submitStatus && <div className="mt-3">{submitStatus}</div>}
            </form>
        </div>
    );
};

export default ContactForm;
