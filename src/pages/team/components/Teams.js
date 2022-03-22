import { teams } from '../../../utils/_data'
import Team from './Team'

function Teams (props) {
  console.log(teams)
  return (
    <div className='grid grid-cols-1 gap-5 mt-5 lg:grid-cols-2'>
      {teams.map(team => 
        <Team key={team.id} team={team} />
      )}
    </div>
  );
}
export default Teams;