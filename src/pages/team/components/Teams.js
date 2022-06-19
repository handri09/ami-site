import { teams } from '../../../utils/_data'
import Team from './Team'

function Teams (props) {
  console.log(teams)
  return (
    <div className='w-full mx-auto flex flex-col gap-5 mt-5 max-w-screen-lg justify-center items-center'>
      {teams.map(team => 
        <Team key={team.id} team={team} />
      )}
    </div>
  );
}
export default Teams;