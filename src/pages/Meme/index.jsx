import React, { useState, useEffect } from 'react';
import {useQuery} from 'react-query';

function Memes() {
    const [index, setIndex] = useState(0);
    const name = localStorage.getItem("name")

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    function reloadImages(){
        let randomNumber = getRndInteger(0, 100);
        setIndex(randomNumber);
    }

    useEffect(() => {
        getMemes();
    }, []);

    const getMemes = async () => {
		const res = await fetch('https://api.imgflip.com/get_memes');
		return res.json();
	};
	
	const {data, error, isLoading} = useQuery('/memes', getMemes);

	if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;
	
	return (
        <div>
            <p>This is {name} meme</p>
            <p>Click to reload new meme</p>
            <ul>
                <button onClick={() => reloadImages()}>Reload</button>
            </ul>
            <ul>
                <div>
                {
                    <img src={data.data.memes[index].url} width="300px" alt="..."></img>
                }
                </div>
            </ul>
        </div>
	);
}

export default Memes;