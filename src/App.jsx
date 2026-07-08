import Layout from "./components/layouts/layout"
import Welcome from "./components/layouts/Welcom"
import Dashboard from "./components/layouts/Dashboard"
import Challanges from "./components/layouts/Challanges"



function App() {

  const page = 0; // 0 for welcome page 1 for dashboard 2 for challanges

  const pages = {
    0 : <Welcome/>,
    1 : <Dashboard/> ,
    3 : <Challanges/>
  }

  return (

        <Layout>
            {pages[0] /* Welcome page */  }  
            {pages[1] /* Dashboard page */  }
            {pages[2] /* Challanges page */  }
        </Layout>
        
            
            
            
        

    

  )

}

export default App
