import Layout from "@/components/layout/";
import Poll from "@/components/data/v2.json"
import Teams from '@/components/data/teams.json';

export default function Rankings() {
    let team_data = Teams["teams"]


    return (
        <Layout url="rankings">
            <div className="page rankings">
                <div className="rankings-container">
                    <div className="rankings-label">Top 25</div>
                    <div className="rankings-teams-container">
                        <div className="rankings-teams top-ten">
                            {Object.keys(Poll["Elo"]).map((team, index) => {
                                return index < 10 ? <div className="rankings-team" style={{
                                    background: `${team_data.filter((value) => {
                                        return Poll["Team"][team] == value.Team
                                    })[0]?.Colors}`
                                }}>
                                    <div className="team-rank">{team}</div>

                                    <div className="team-label">
                                        <div className="team-label-logo" style={{
                                            background: `url(${team_data.filter((value) => {
                                                return Poll["Team"][team] == value.Team
                                            })[0]?.logos})`
                                        }}>
                                        </div>
                                        <div className="team-label-inner-text">
                                         {Poll["Team"][team]}
                                        </div>

                                    </div>
                                    <div className="team-elo">{Poll["Elo"][team]}</div>
                                    
                                    </div> : ""
                            })}
                        </div>
                        <div className="rankings-teams best-of-the-rest">
                            {Object.keys(Poll["Elo"]).map((team, index) => {
                                return index < 25 && index > 10 ? <div className="rankings-team">
                                    <div className="team-rank">{team} </div>
                                    
                                    
                                    <div className="team-label">{Poll["Team"][team]}</div> 
                                    <div className="team-elo">{Poll["Elo"][team]}
                                    </div>
                                    </div> : ""
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
