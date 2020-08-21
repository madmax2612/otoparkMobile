import React from "react";

export const Loader = () => {
  return (
<>
    <div className="loader ">
      <div className="row ">
        <div className="col-lg-4 col-sm-12 col-md-12">
          <div className="row">
            <div class="text-center">
              <div class="spinner-grow text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <h4 className="text">
                  Loading please wait...
              </h4>
            </div>
            
            
          </div>
        </div>
      </div>  
         {/* <img src={require('../Assets/mumbai.png')}/> */}
    </div>
    
  </>

  );
};
