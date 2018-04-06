import React, { Component } from 'react'; 
import Select from 'react-select';


export default class AddUserForm extends Component {

    onToggleFormVisibility() {
        this.props.handleToggleFormVisibility();
    }
    
    getGenderOptions() {
      return [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' }
      ];
    }

    onSelectedGenderChange(val) {
      const gender = val ? val.value : '';
      console.log(gender);
      this.props.handleSelectedGenderChange(gender);
    }


    render() {

        const isFormVisible = this.props.isFormVisible;
        const formStyle = {
            display: isFormVisible ? 'block' : 'none'
        };

        const addOrMinusSign = isFormVisible ? 'fa fa-minus fa-2x' : 'fa fa-plus fa-2x';
        const hideOrAddUserText = isFormVisible ? 'Hide' : 'Add User';

        return (
            <div>

              <i className = { addOrMinusSign } onClick = { this.onToggleFormVisibility.bind(this) } > </i> { hideOrAddUserText }  

            <div style = { formStyle } className="col-lg-12 addUserSection">
             <form>

            <div className="form-group row">
                <label htmlFor="gender" className="col-sm-2 col-form-label">Gender</label>
                <div className="col-sm-10">
                  <Select
                    name="form-field-gender"
                    value= { this.props.selectedGender }
                    options={ this.getGenderOptions() }
                    onChange={ this.onSelectedGenderChange.bind(this) }
                    />
                </div>
            </div>  
           

            <div className="form-group row">
              <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="name" placeholder="Name" autoComplete = "off" />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="phone" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="email" placeholder="Email" autoComplete = "off" />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="age" className="col-sm-2 col-form-label">Age</label>
              <div className="col-sm-10">
                <input type="number" className="form-control" id="age" placeholder="Age" autoComplete = "off" />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="region" className="col-sm-2 col-form-label">Region</label>
              <div className="col-sm-10">
              </div>
            </div>

            <input className="btn btn-secondary mr-3" type="submit" value="Submit" />
            <button className="btn btn-secondary">Clear Fields</button>
         </form>
      </div>
      
     </div> 
        );
    }

}
