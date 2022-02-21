import { teams } from '../utils/_data'

function Teams (props) {
  return (
    <div className='grid'>    

      {
        teams.map( team => (
          <Team data={team} key={team.id}/>
        )) 
      }
    </div>
  );
}
export default Teams;

function Team (props) {
  const { story, name, url, role } = props.data
  return (
    <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 my-2">
      <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={url} alt="" width="384" height="512" />
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-medium">
            {story}
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text-sky-400">
            {name}
          </div>
          <div class="text-slate-700 dark:text-slate-500">
            {role}
          </div>
        </figcaption>
      </div>
    </figure>
  );
}