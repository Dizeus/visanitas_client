import { FC, useState } from 'react';
import style from './UserSearchForm.module.scss';

interface UserSearchFormProps {
  fetchUsers: (page: number, query: string) => void
}


export const UserSearchForm: FC<UserSearchFormProps> = ({ fetchUsers }) => {

  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchUsers(1, query);
  };

  return (
    <form onSubmit={handleSubmit} className={style.form} data-testid="image">
      <div className={style.group}>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className={style.input}
          type="text"
          placeholder="Імя"
        />
        <button className={style.button} type="submit">
          Пошук
        </button>
      </div>
    </form>
  );
};
