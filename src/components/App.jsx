import css from './App.module.css'

import {UserProfile} from 'components/profile/UserProfile';
import user from 'allData/user.json'

import {Statistics} from 'components/statistics/Statistics';
import data from 'allData/data.json'

import {FriendList} from 'components/friendList/FriendList';
import friends from 'allData/friends.json'

import {TransactionHistory} from 'components/transactions/Transactions';
import transactions from 'allData/transactions.json';

export function App() {
    return  <div className={css.app}>
      <UserProfile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
    
    
}