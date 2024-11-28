import React from 'react'

interface Params {
    params: {
        id: string
    }
}

interface IBook {
    id: number,
    name: string,
    author: string,
    type: string,
    price: number,
    'current-stock': number,
    available: boolean
}

const page = async ({ params }: Params) => {
    const { id } = params;

    const res = await fetch(`https://simple-books-api.glitch.me/books/${id}`);
    const data: IBook = await res.json();

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
            <h1 className="text-3xl font-bold text-red-400 mb-4">Book ID: {id}</h1>
            <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-2 text-yellow-400">Name: {data.name}</h2>
                <p className="text-lg mb-2">Author: <span className="text-gray-300">{data.author}</span></p>
                <p className="text-lg mb-2">Type: <span className="text-gray-300">{data.type}</span></p>
                <p className="text-lg mb-2">Price: <span className="text-gray-300">${data.price}</span></p>
                <p className="text-lg mb-2">Current Stock: <span className="text-gray-300">{data['current-stock']}</span></p>
                <p className="text-lg">Available: <span className={`font-bold ${data.available ? 'text-green-400' : 'text-red-400'}`}>
                    {data.available ? 'Yes' : 'No'}
                </span></p>
            </div>
        </div>
    );
};

export default page;
