import React, { useEffect, useState } from 'react';

const Search = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('');
    console.log(search)


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setData(json)
            })
    }, [])
    return (
        <div>

            <input onChange={(e) => setSearch(e.target.value)} type="search" placeholder='Search Your Name or Email' />


            <div>
                {
                    data.filter((user) => {
                        return search.toLowerCase() === '' ? user : (user.name.toLowerCase().includes(search) || user.email.toLowerCase().includes(search))
                    }).map((user, i) => {
                        return <div key={i} style={{ border: '1px solid red', margin: '20px' }}>
                            <li>{user.id}</li>
                            <li>{user.name}</li>
                            <li>{user.email}</li>
                        </div>
                    })
                }


                <div>

                </div>
            </div>
        </div>
    );
};

export default Search;