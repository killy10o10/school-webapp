import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

function Page404() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-5">
      <img src="https://emojicdn.elk.sh/🔍?style=samsung" alt="" />
      <h3 className='text-2xl italic'>Sorry, the page you were looking for was not found</h3>
      <Link to="/">
        <Button>Return to Home</Button>
      </Link>
    </section>
  );
}

export default Page404;
