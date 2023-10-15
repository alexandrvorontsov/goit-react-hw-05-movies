import { useLocation } from 'react-router-dom';
import { BackLink } from '../BackLink/BackLink';

const NotFound = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <p>404 page not found</p>
    </>
  );
};

export default NotFound;
