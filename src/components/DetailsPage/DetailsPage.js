import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MenuBar from '../MenuBar/MenuBar';
import './DetailsPage.css'
import male from '../../images/male.png'
import female from '../../images/female.png'

const DetailsPage = (props) => {
    const { idTeam } = useParams();
    // console.log(idTeam)
    const [details, setDetails] = useState({});
    useEffect(() => {

        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then(data => setDetails(data.teams[0]))
    }, [])
    console.log(props)
    return (
        <div className="details">
            <MenuBar></MenuBar>
            <div className="team-details">
                <div className="male-female p-2">
                    {details.strGender === 'Male' ?
                        <img className="w-50" src={male} alt="" />
                        :
                        <img className="w-50" src={female} alt="" />
                    }


                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="logo-img">
                            <img className="w-50" src={details.strTeamBadge} alt="" />
                            <h1>{details.strLeague}</h1>
                            <p>{details?.strStadiumDescription}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <p>{details?.strDescriptionEN}</p>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default DetailsPage;