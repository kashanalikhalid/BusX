import React from 'react';
import '../assets/css/profile.css'

const Profile = () => {
    return (
                <div className=" bootstrap snippets bootdey">
                    <div className="row">
                        <div className="profile-nav col-md-3">
                            <div className="panel">
                                <div className="user-heading round">
                                    <a href="#">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/>
                                    </a>
                                    <h1>Camila Smith</h1>
                                    <p>deydey@theEmail.com</p>
                                </div>

                            </div>
                        </div>
                        <div className="profile-info col-md-9">
                            <div className="panel">
                                <div className="panel-body bio-graph-info pl-md-4 pt-md-2">
                                    <h1>Bio Graph</h1>
                                    <div className="row">
                                        <div className="bio-row">
                                            <p><span>First Name </span>: Camila</p>
                                        </div>
                                        <div className="bio-row">
                                            <p><span>Last Name </span>: Smith</p>
                                        </div>
                                        <div className="bio-row">
                                            <p><span>Country </span>: Australia</p>
                                        </div>
                                        <div className="bio-row">
                                            <p><span>Birthday</span>: 13 July 1983</p>
                                        </div>
                                        <div className="bio-row">
                                            <p><span>Occupation </span>: UI Designer</p>
                                        </div>
                                        <div className="bio-row">
                                            <p><span>Email </span>: jsmith@flatlab.com</p>
                                        </div>
                                        <div className="bio-row">
                                            <p><span>Mobile </span>: (12) 03 4567890</p>
                                        </div>
                                        <div className="bio-row">
                                            <p><span>Phone </span>: 88 (02) 123456</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="panel">
                                            <div className="panel-body">
                                                <div className="bio-chart">
                                                    {/*<div style={{"display:inline;width:100px;height:100px;"}}>*/}
                                                    {/*    <canvas width="100" height="100px"></canvas>*/}
                                                    {/*    <input className="knob" data-width="100" data-height="100"*/}
                                                    {/*           data-displayprevious="true" data-thickness=".2"*/}
                                                    {/*           value="35" data-fgcolor="#e06b7d" data-bgcolor="#e8e8e8"*/}
                                                    {/*           style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(224, 107, 125); padding: 0px; -webkit-appearance: none; background: none;"/>*/}
                                                    {/*</div>*/}
                                                </div>
                                                <div className="bio-desk">
                                                    <h4 className="red">Envato Website</h4>
                                                    <p>Started : 15 July</p>
                                                    <p>Deadline : 15 August</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="panel">
                                            <div className="panel-body">
                                                <div className="bio-chart">
                                                    {/*<div style="display:inline;width:100px;height:100px;">*/}
                                                    {/*    <canvas width="100" height="100px"></canvas>*/}
                                                    {/*    <input className="knob" data-width="100" data-height="100"*/}
                                                    {/*           data-displayprevious="true" data-thickness=".2"*/}
                                                    {/*           value="63" data-fgcolor="#4CC5CD" data-bgcolor="#e8e8e8"*/}
                                                    {/*           style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(76, 197, 205); padding: 0px; -webkit-appearance: none; background: none;"/>*/}
                                                    {/*</div>*/}
                                                </div>
                                                <div className="bio-desk">
                                                    <h4 className="terques">ThemeForest CMS </h4>
                                                    <p>Started : 15 July</p>
                                                    <p>Deadline : 15 August</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="panel">
                                            <div className="panel-body">
                                                <div className="bio-chart">
                                                    {/*<div style="display:inline;width:100px;height:100px;">*/}
                                                    {/*    <canvas width="100" height="100px"></canvas>*/}
                                                    {/*    <input className="knob" data-width="100" data-height="100"*/}
                                                    {/*           data-displayprevious="true" data-thickness=".2"*/}
                                                    {/*           value="75" data-fgcolor="#96be4b" data-bgcolor="#e8e8e8"*/}
                                                    {/*           style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(150, 190, 75); padding: 0px; -webkit-appearance: none; background: none;"/>*/}
                                                    {/*</div>*/}
                                                </div>
                                                <div className="bio-desk">
                                                    <h4 className="green">VectorLab Portfolio</h4>
                                                    <p>Started : 15 July</p>
                                                    <p>Deadline : 15 August</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="panel">
                                            <div className="panel-body">
                                                <div className="bio-chart">
                                                    {/*<div style="display:inline;width:100px;height:100px;">*/}
                                                    {/*    <canvas width="100" height="100px"></canvas>*/}
                                                    {/*    <input className="knob" data-width="100" data-height="100"*/}
                                                    {/*           data-displayprevious="true" data-thickness=".2"*/}
                                                    {/*           value="50" data-fgcolor="#cba4db" data-bgcolor="#e8e8e8"*/}
                                                    {/*           style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(203, 164, 219); padding: 0px; -webkit-appearance: none; background: none;"/>*/}
                                                    {/*</div>*/}
                                                </div>
                                                <div className="bio-desk">
                                                    <h4 className="purple">Adobe Muse Template</h4>
                                                    <p>Started : 15 July</p>
                                                    <p>Deadline : 15 August</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>

    );
};

export default Profile;
