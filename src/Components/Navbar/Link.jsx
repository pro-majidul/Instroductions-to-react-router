import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <div className='mr-3 hover:bg-slate-900 px-6 py-2 rounded-xl hover:text-white'>
            <li><a href={route.path}> {route.name}</a></li>
        </div>
    );
};
Link.propTypes ={
    route: PropTypes.object.isRequired
}
export default Link;