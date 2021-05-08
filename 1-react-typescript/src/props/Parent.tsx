import { ChildFC } from './Child';

const Parent = () => {
  return (
    <ChildFC color='red' onClick={() => console.log('clicked')}>
      Hello! Children!
    </ChildFC>
  );
};

export default Parent;
