import { Routes,Route, } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import TotalPending from "../Pages/TotalPending";
import TotalResolved from "../Pages/TotalResolved";
import TotalReject from "../Pages/TotalReject";
import TotalAccept from "../Pages/TotalAccepted";
import AcceptReject from "../Pages/ReportPage/AcceptReject";
import AllGrievences from "../Pages/ReportPage/AllGrievences";
import SearchedDate from "../Pages/ReportPage/SearchedDate";
import SearchedTalukavillage from "../Pages/ReportPage/SearchedTalukavillage";
import Searchedgrievenceid from "../Pages/ReportPage/Searchedgrievenceid";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/TotalPending" element={<TotalPending/>}/>
      <Route path="/TotalResolved" element={<TotalResolved/>}/>
      <Route path="/TotalReject" element={<TotalReject/>}/>
      <Route path="/TotalAccept" element={<TotalAccept/>}/>
      <Route path="/AllGrievences" element={ <AllGrievences/>}/>
      <Route path="/AcceptReject" element={<AcceptReject/>}/>
      <Route path="/SearchedDate" element={<SearchedDate/>}/>
      <Route path="/SearchedTalukavillage" components={<SearchedTalukavillage/>}/>
      <Route path="/SearchedGrievenceid" element={< Searchedgrievenceid/>}/>
    </Routes>
    
  );
}
export default AppRoutes;
