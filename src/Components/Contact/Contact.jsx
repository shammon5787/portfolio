import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbwRbR2Kl4nEnZFGRSN-eVaVJc1MW1n2xPxZWUMxKvGEc1_oW222yJeIxoIH02ETQ2o/exec',  {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Form submitted successfully!');
            } else {
                alert('Error submitting form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form');
        }
    };


    return (
        <section id='contact' className='w-full py-20 border-b-[1px] border-b-black '>
            <form  onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <label>Name:</label>
                    <input className='p-2 rounded-md text-black w-full lg:w-[30vw] outline-none ' placeholder='enter name' type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className='flex flex-col'>
                    <label>Email:</label>
                    <input className='p-2 rounded-md text-black w-full lg:w-[30vw] outline-none ' placeholder='enter email' type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className='flex flex-col'>
                    <label>Contact:</label>
                    <input className='p-2 rounded-md text-black w-full lg:w-[30vw] outline-none ' placeholder='enter contact' type="text" name="contact" value={formData.contact} onChange={handleChange} required />
                </div>
                <button className='mt-3 w-full bg-slate-600 lg:w-[30vw] p-2 rounded-lg '  type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Contact