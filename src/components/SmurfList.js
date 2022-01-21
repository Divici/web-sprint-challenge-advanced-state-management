import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';

 const SmurfList = (props)=> {
    const {loading, smurfs} = props;
    
    if (loading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        {
            smurfs.map(smurf=>{
                return (<Smurf smurf={smurf} key={smurf.id}/>)
            })
        }
        
    </div>);
}

const mapStateToProps = (state) => {
    return {
       smurfs: state.smurfs,
       loading: state.loading 
    }
}

export default connect(mapStateToProps)(SmurfList);

