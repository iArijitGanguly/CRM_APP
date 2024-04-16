import { Route, Routes } from 'react-router-dom';

import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';

function MainRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signip" element={<Signup />} />
    </Routes>
  );
}

export default MainRouter;