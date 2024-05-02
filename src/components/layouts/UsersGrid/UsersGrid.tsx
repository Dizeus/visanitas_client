import { FC } from 'react';
import style from './UsersGrid.module.scss';
import { MyPagination } from '../../molecules/MyPagination/MyPagination';
import { NoMessage } from '../../atoms/NoMessage/NoMessage';
import { IUser } from '../../../utils/types/IUser';
import {User} from "../../organisms/User/User";

interface UsersGridProps {
  users: IUser[],
  totalPage: number,
  fetchUsers: (page: number, query: string) => void,
}

export const UsersGrid: FC<UsersGridProps> = ({users, fetchUsers, totalPage}) => {


  if (users.length < 1) {
    return <NoMessage text="People" />;
  }

  return (
    <>
      <div className={style.users}>
        {users.map((user: IUser) => (
          <User
            key={user.id}
            user={user}
          />
        ))}
      </div>
      {totalPage > 1 && (
        <MyPagination
          handleClick={(page: number) =>
              fetchUsers(page, '')
          }
          total={totalPage}
          page={1}
        />
      )}
    </>
  );
}
