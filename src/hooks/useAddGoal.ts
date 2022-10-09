import { useSelector } from 'react-redux';
import { RootState } from '../redux/config/configStore';

export default function useTodos() {
  const todos = useSelector((state: RootState) => state.form);
  return todos;
}
