import Layout from "@/components/layout/";
import Poll from "@/components/data/v5.json"
import Teams from '@/components/data/teams.json';

export default function Rankings() {
    let team_data = Teams["teams"]
    let elos =  Poll["Elo"];
    let sortedElos = Object.entries(elos).sort(([, a], [, b]) => b - a);
    return (
        <Layout url="rankings">
            <div className="page rankings">
                <div className="rankings-container">
                    <div className="rankings-label">Top 25</div>
                    <div className="rankings-teams-container">
                        <div className="rankings-teams top-ten">
                            {sortedElos.map((team, index) => {
                                return index < 10 ? <div className="rankings-team" style={{
                                    background: `${team_data.filter((value) => {
                                        return Poll["Team"][team[0]] == value.Team
                                    })[0]?.Colors}`
                                }}>
                                    <div className="team-rank">{index+1}</div>

                                    <div className="team-label">
                                        <div className="team-label-logo" style={{
                                            background: `url(${team_data.filter((value) => {
                                                return Poll["Team"][team[0]] == value.Team
                                            })[0]?.logos})`
                                        }}>
                                        </div>
                                        <div className="team-label-inner-text">
                                         {Poll["Team"][team[0]]}
                                        </div>

                                    </div>
                                    <div className="team-elo">{Math.ceil(Poll["Elo"][team[0]] * 100) / 100}</div>
                                    
                                    </div> : ""
                            })}
                        </div>
                        <div className="rankings-teams best-of-the-rest">
                            {sortedElos.map((team, index) => {
                                return index < 25 && index > 10 ? <div className="rankings-team">
                                    <div className="team-rank">{index+1} </div>
                                    
                                    
                                    <div className="team-label">{Poll["Team"][team[0]]}</div> 
                                    <div className="team-elo">{Math.ceil(Poll["Elo"][team[0]] * 100) / 100}
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
