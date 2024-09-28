'use client';
import React, { useState } from 'react';

const SupportersList = ({ supporters }) => {
    return (
        <ul>
            {supporters.map((supporter, index) => (
                <li key={index} className='my-2'>
                    {supporter.name} donated ${supporter.amount} with a message "{supporter.message}"
                </li>
            ))}
        </ul>
    );
};

const PaymentSection = ({ onPay }) => {
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');

    const handleAmountChange = (e) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setAmount(value);
            setError('');
        } else {
            setError('Please enter a valid number');
        }
    };

    const handlePaymentClick = () => {
        if (amount === '' || parseFloat(amount) <= 0) {
            setError('Please enter a valid amount to pay.');
        } else {
            onPay(amount);
        }
    };

    return (
        <div className='makePayment w-1/2 bg-slate-900 rounded-lg text-white p-12 mt-2'>
            <h2 className='text-2xl font-bold my-4'>Make a Payment</h2>
            <div className='flex gap-2 flex-col'>
                <div>
                    <input type='text' className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                </div>
                <input type='text' className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                <input
                    type='text'
                    value={amount}
                    onChange={handleAmountChange}
                    className='w-full p-3 rounded-lg bg-slate-800'
                    placeholder='Enter Amount'
                />
                <button onClick={handlePaymentClick}
                    className="text-white bg-gradient-to-br from-purple-600 to-red-500 hover:bg-gradient-to-bl font-medium rounded-lg text-lg w-40 px-6 py-1  text-center transition-transform duration-300 hover:scale-95 "
                >Pay
                </button>
            </div>
            {error && <p className='text-red-500 mt-2'>{error}</p>}

            {/* or choose manually from this amount */}
            <div className='flex gap-3 mt-4'>
                <button className='bg-slate-800 p-3 rounded-lg'> Pay $10 </button>
                <button className='bg-slate-800 p-3 rounded-lg'> Pay $40 </button>
                <button className='bg-slate-800 p-3 rounded-lg'> Pay $80 </button>
            </div>
        </div>
    );
};

const Username = ({ params }) => {
    const [profileImage, setProfileImage] = useState(
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d70397b1-3c21-4150-9b5e-4159c26486a4/dg7bdtl-d7f83cb9-c3fe-48dd-9c41-43790122bcd0.png/v1/fill/w_894,h_894,q_70,strp/ink_wash_majesty__ethereal_tiger_portrait_by_odysseyorigins_dg7bdtl-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q3MDM5N2IxLTNjMjEtNDE1MC05YjVlLTQxNTljMjY0ODZhNFwvZGc3YmR0bC1kN2Y4M2NiOS1jM2ZlLTQ4ZGQtOWM0MS00Mzc5MDEyMmJjZDAucG5nIiwiaGVpZ2h0IjoiPD0xMDI0Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvZDcwMzk3YjEtM2MyMS00MTUwLTliNWUtNDE1OWMyNjQ4NmE0XC9vZHlzc2V5b3JpZ2lucy00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.J0MXc3f_NLNBbmCLniYX9oNiM4EDxhBbw7TffKi9Z28'
    );

    const [supporters, setSupporters] = useState([
        
        { name: 'Suhas', amount: 20, message: 'Nice...' },
        { name: 'Lokesh', amount: 15, message: 'Showing some love 💞' },
        { name: 'Gunjan', amount: 32, message: 'You are Awesome...!✨' },
        { name: 'Sanskar', amount: 12, message: 'You are doing Good work❤️' },
        { name: 'Akshay', amount: 24, message: 'Keep it up!' },
        
    ]);

    const handleProfileImageClick = () => {
        document.getElementById('profileImageInput').click();
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload a valid image file.');
        }
    };

    const handlePayment = (amount) => {
        alert(`Payment of $${amount} received!`);
        // Further payment handling logic can be added here.
    };

    return (
        <>
            <div className='cover w-full bg-red-50 relative'>
                <img
                    className='object-cover w-full h-[350px]'
                    src='https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4073784/8a37f20ea70b4da68c0c6ddf4a5bfbfe/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/14.jpg?token-time=1728000000&token-hash=imcbfPDFvLp9qVwoJ05WANbj6fwfI6H41yOfnhqh68E%3D'
                    alt='cover image'
                />
            </div>

            {/* Profile Image Section */}
            <div className='absolute bottom-[37%] right-[45.5%] border-white border-4 rounded-full'>
                <img
                    className='rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-200'
                    width={120}
                    height={120}
                    src={profileImage}
                    alt='profile picture'
                    onClick={handleProfileImageClick}
                />
                <input
                    id='profileImageInput'
                    type='file'
                    accept='image/*'
                    className='hidden'
                    onChange={handleImageUpload}
                />
            </div>

            {/* User Info Section */}
            <div className='info flex justify-center items-center flex-col gap-2 text-white py-12 mt-6'>
                <div className='font-bold text-lg'>@Gaurav Chaudhari</div>
                <div className='font-bold text-slate-400'>
                    creating projects for development. Support me..!
                </div>
                <div className='font-bold text-slate-400'>
                    20,032 followers . 32 posts . $18,232/release
                </div>

                <div className='payment flex gap-3 w-[80%]'>
                    <div className='supporters w-1/2 bg-slate-900 rounded-lg text-white p-12 mt-2'>
                        <h2 className='text-2xl font-bold my-2'>Supporters</h2>
                        <SupportersList supporters={supporters} />
                    </div>

                    <PaymentSection onPay={handlePayment} />
                </div>
            </div>
        </>
    );
};

export default Username;
