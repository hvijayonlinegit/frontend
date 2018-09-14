import React from 'react';
import MySnackbarContentWrapper from './MySnackContent'
export default () => <div>
    <MySnackbarContentWrapper
          variant="info"
         // className={classes.margin}
          message="Sorry user you need Admin access to see the content . 
          
          Please login as admin . or 
          If you are new to recupro and  need access please email to >>>  hvijayonline@gmail.com 
      
          Thank you ."
        />
</div>;