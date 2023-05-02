          //
import React from 'react';
import productsData from '../data/productsData';
import ProductsCard from '../components/ProductsCard';
import ProductList from '../components/ProductList';        
import axios from 'axios'
import { useState , useEffect  } from 'react';
import { Pagination } from '../components/Pagination';


const BaseUrl="https://63bbfa11cf99234bfa6a813b.mockapi.io/Apidata";

const Home = () => {

    const [api, setapi] = useState([]);
    const [currentpage, setcurrentpage] = useState(1)
    const [postprepage, setpostprepage] = useState(2)

    const get = async()=>{
        const val = await axios.get(`${BaseUrl}`)
        setapi(val.data);
    }
      

    useEffect(() => {
        
        get();
    }, []);
	

    const lastindex     = currentpage * postprepage;
    const firstpage     = lastindex - postprepage;
    const currentposts  = api.slice(firstpage ,lastindex);
    
                                /* {
                                 productsData.map((item) => (
                                <ProductsCard key={item.id} {...item} />
                                   ))
                                 }*/
return (
        <>
            <section id="home">
                <div className="container mb-5">
                  <div className="home_content">
					
                 
                    <ProductList api={currentposts}/>     
					
                    <Pagination 
					
			      	 totalposts={api.length} 
                     postprepage={postprepage}
                     setcurrentpage={setcurrentpage}
                     currentpage={currentpage}
					 
					 />
					 
					 
					 
					 
					 
                    </div>
                </div>
                
            </section>
        </>
    );
};

export default Home;