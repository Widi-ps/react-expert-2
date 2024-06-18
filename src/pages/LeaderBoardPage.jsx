import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LeaderBoardList from '../components/LeaderBoardList';
import Header from '../components/Header';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

function LeaderBoardPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);
  const authUser = useSelector((states) => states.authUser);
  const leaderboards = useSelector((states) => states.leaderboards);

  return (
    <div>
      <Header authUser={authUser} />
      <h4 className='text-center mt-5'>Klasemen Pengguna Aktif</h4>
      <div className='p-3'>
        {leaderboards && (
          <LeaderBoardList leaderboards={leaderboards} forMobile={true} />
        )}
      </div>
    </div>
  );
}
export default LeaderBoardPage;
