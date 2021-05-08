import ReactDOM from 'react-dom';
import EventComponent from './events/EventComponent';
import UserSearchRef from './refs/UserSearch';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

const App = () => {
  return (
    <div>
      <h3>Type state that is initialized with an empty array</h3>
      <GuestList />

      <h3>Type state that is either an object or undefined</h3>
      <UserSearch />

      <h3>Typing events</h3>
      <EventComponent />

      <h3>Typing useRef</h3>
      <UserSearchRef />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
