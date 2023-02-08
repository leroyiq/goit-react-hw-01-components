import css from './App.module.css';

import { UserProfile } from 'components/profile/UserProfile';
import user from 'data/user.json';

import { Statistics } from 'components/statistics/Statistics';
import data from 'data/data.json';

import { FriendList } from 'components/friendList/FriendList';
import friends from 'data/friends.json';

import { TransactionHistory } from 'components/transactions/Transactions';
import transactions from 'data/transactions.json';

export function App() {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div className={css.app}>
      <UserProfile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
