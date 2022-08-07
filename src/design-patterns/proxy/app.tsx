import {Route, Routes} from "react-router-dom";
import DummyComponent from "./components/dummie-component";
import useUserData from "./hooks/userdata.hook";
import ProtectedRoute from "./components/ProtectedRoute";

const AppRoutes = () => {
    const {permission} = useUserData();

    return (
        <Routes>
            {/*     Everyone can access    */}
            <Route index element={<DummyComponent type={"Landing"}/>}/>
            <Route path={"/login"} element={<DummyComponent type={"Login"}/>}/>
            {/*     Only admin can access    */}
            <Route element={<ProtectedRoute permission={permission === "admin"} />}>
                <Route path="/admin" element={<DummyComponent type={"Admin dashboard"} />} />
                <Route path="/admin/vendors" element={<DummyComponent type={"Admin vendor list"}/>} />
            </Route>
            {/*     Only admin & vendor can access    */}
            <Route element={<ProtectedRoute permission={["admin","vendor"].includes(permission)}/>}>
                <Route path="/clients" element={<DummyComponent type={"Admin and vendor access"} />} />
            </Route>
            {/*     Only vendor can access    */}
            <Route element={<ProtectedRoute permission={permission === "vendor"} />}>
                <Route path="/myshop" element={<DummyComponent type={"My shop"} />} />
            </Route>
            {/*     Only client can access    */}
            <Route element={<ProtectedRoute permission={permission === "client"} />}>
                <Route path="/mycart" element={<DummyComponent type={"My Cart"} />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes