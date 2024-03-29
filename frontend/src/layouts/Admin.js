
import React, { Component,useEffect } from "react";
import { useLocation, Route, Switch,Redirect } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Sidebar from "components/Sidebar/Sidebar";

import routes from "routes.js";

import sidebarImage from "assets/img/sidebar-3.jpg";
import {useSelector} from "react-redux";

function Admin({history}) {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const userLogin=useSelector(state=>state.userLogin)
  const {loading,error,userInfo}=userLogin

  useEffect(()=>{

  },[userInfo])

  const feeStatus=(date)=>{
    date= new Date(date)
    let today= new Date()
    return Math.round((today-date)/(1000*60*60*24));
  }


  const redirect=(url)=> <Redirect to={`${url}`}/>

  const checkDefaulter=()=>{
    let years=parseInt(userInfo.license.type.charAt(0))
    let days=feeStatus(userInfo.license.paymentDate)-1
    return (days <= (365 * years))
  }


  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  React.useEffect(() => {
    checkDefaulter()

    if(userInfo!==null && userInfo.type==="Admin" && checkDefaulter() && userInfo.license.status)
    {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      mainPanel.current.scrollTop = 0;
      if (
          window.innerWidth < 993 &&
          document.documentElement.className.indexOf("nav-open") !== -1
      ) {
        document.documentElement.classList.toggle("nav-open");
        var element = document.getElementById("bodyClick");
        element.parentNode.removeChild(element);
      }

    }


  }, [location]);

  const adminPage=()=>{
    if(userInfo==null)
      return redirect('/login');
    else if(userInfo.type!=="Admin")
    {
      return redirect('/403')
    }
    else if(!userInfo.license.status)
    {
      return redirect('/403')
    }
    else if(!checkDefaulter())
    {
      return redirect('/expired')
    }
    else{
      return (
          <div>

            <div className="wrapper">
              <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />
              <div className="main-panel" ref={mainPanel}>
                <AdminNavbar />
                <div className="content">
                  <Switch>{getRoutes(routes)}</Switch>
                </div>
              </div>
            </div>
            {/*<FixedPlugin*/}
            {/*    hasImage={hasImage}*/}
            {/*    setHasImage={() => setHasImage(!hasImage)}*/}
            {/*    color={color}*/}
            {/*    setColor={(color) => setColor(color)}*/}
            {/*    image={image}*/}
            {/*    setImage={(image) => setImage(image)}*/}
            {/*/>*/}
          </div>
      )
    }
  }
  return (

    <>

      {
        adminPage()

      }

    </>

  );
}

export default Admin;
