import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';
import './AllTams.css'

const AllTeams = () => {
    const [teams, setTeams] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`)
            .then(res => res.json())
            .then(data => setTeams(data?.teams))

    }, [searchText]);
    const handleOnChange = (e) => {
        setSearchText(e.target.value)

    }
    console.log(teams)
    return (
        <div className="team-container">
            <MenuBar></MenuBar>
            <h1>Our Teams</h1>
            <div className="search-box">
                <input onChange={handleOnChange} className="p-2" type="text" placeHolder="Enter Team Name" />
                <button className="btn btn-danger p-2">Search</button>

            </div>
            <div className="teams">
                <div className="row">
                    {
                        teams?.map(team => <div className="col-md-4">
                            <div className="cart">
                                <div className="logo-image">
                                    <img className="w-50" src={team.strTeamBadge} alt="" />
                                </div>
                                <h1>{team?.strTeam}</h1>
                                <p>{team?.strAlternate}</p>
                                <p>{team.strCountry}</p>
                                <p>{team?.strGender}</p>
                                <Link to={`/details/${team?.idTeam}`}>
                                    <button className="btn btn-success">Details</button>

                                </Link>
                            </div>
                        </div>)
                    }

                </div>

            </div>
        </div>
    );
};

export default AllTeams;