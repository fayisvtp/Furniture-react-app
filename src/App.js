
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { Mycontext } from './Usecontext';
import { Product } from './components/products/Products';
import Bedroom from './components/products/Bedroom';
import Living from './components/products/Living'
import Showprdcts from './components/products/Showprdcts';
import { useState } from 'react';
import Caart from './components/products/Caart';


import SignUp from './components/products/SignUp';
import Search from './components/products/Search';
import {demiUser}  from './components/products/Demiuser';
// import {demiUser} from './components/products/Demiuser'
import { admindummy } from './components/admin_Panel/Dummy_users';
import AdminLogin from './components/admin_Panel/AdminLogin';
import AdminHome from './components/admin_Panel/AdminHome';
import BedroomAdmin from './components/admin_Panel/BedroomAdmin';
// import LivingAdmin from './components/admin_Panel/LivingAdmin';
import AddProducts from './components/admin_Panel/AddProducts';
import Updateproduct from './components/admin_Panel/Updateproduct';
import ViewUsers from './components/admin_Panel/ViewUsers';
import {userList} from './components/admin_Panel/Demyuseres';
import Payment from './components/products/Payment';
import LoginPage from './components/products/Login_page';
function App() {
  const [Products,setProduct]=useState(Product)
  const [cart,setCart]=useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [user,setUser]= useState(demiUser)
  const [admindata,setAdminData] = useState(admindummy)
  const [login,setlogin] = useState(userList)
  const [isloggedin,setisloggedin]= useState(false)

  return (
   <div>


  <Mycontext.Provider value={{Products,
    setProduct,cart,setCart,
    searchTerm, setSearchTerm,
    user,setUser,admindata,setAdminData,
    login,setlogin,
    isloggedin,setisloggedin}}>
          
                                 {/* USER SESSION */}

<Routes> 
<Route path='/'element={<Home/>}/>
<Route path='/bedroom'element={<Bedroom/>}/>
<Route path='/living'element={<Living/>}/>
<Route path='/show/:id'element={<Showprdcts/>}/>
<Route path='/caart'element={<Caart/>}/>
<Route path='/login'element={<LoginPage/>}/>
<Route path='/search'element={<Search/>}/>
<Route path='/signup'element={<SignUp/>}/>
<Route path='/payment'element={<Payment/>}/>
{/* element={user? <Home/>:<Login/> */}

                               {/* ADMIN PANEL */}


<Route path='/adminlogin'element={<AdminLogin/>}/>
<Route path='/adminhome'element={<AdminHome/>}/>
<Route path='/bedroomadmin'element={<BedroomAdmin/>}/>
<Route path='/addproduct'element={<AddProducts/>}/>
<Route path='/adminedit/:id'element={<Updateproduct/>}/>
<Route path='/viewusers'element={<ViewUsers/>}/>

</Routes>
</Mycontext.Provider>

   </div>
  );
}

export default App;



